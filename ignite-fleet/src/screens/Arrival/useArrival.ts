import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { BSON } from 'realm'
import { useObject, useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/Historic'
import { useRoute, useNavigation } from '@react-navigation/native'
import { getLastSyncTimestamp } from '@libs/asyncStorage/syncStorage'

type RouteParamsProps = {
  id: string
}

export function useArrival() {
  const [isLoading, setIsLoading] = useState(false)
  const [dataNotSynced, setDataNotSynced] = useState(false)

  const route = useRoute()
  const navigation = useNavigation()
  const { id } = route.params as RouteParamsProps

  const realm = useRealm()
  const historic = useObject(Historic, new BSON.UUID(id) as unknown as string)

  function handleRemoveVehicleUsage() {
    Alert.alert('Cancelar', 'Cancelar a utilização do veículo?', [
      { text: 'Não', style: 'cancel' },
      {
        text: 'Sim',
        onPress: () => {
          removeVehicleUsage()
        },
      },
    ])
  }

  function removeVehicleUsage() {
    realm.write(() => {
      realm.delete(historic)
    })

    navigation.goBack()
  }

  function handleArrivalRegister() {
    try {
      setIsLoading(true)

      if (!historic) {
        return Alert.alert('Error', 'Não foi obter os dados do veículo.')
      }

      realm.write(() => {
        historic.status = 'arrival'
        historic.updated_at = new Date()
      })

      Alert.alert('Chegada', 'Chegada registrada com sucesso!')

      navigation.goBack()
    } catch (error) {
      console.log('Handle Arrival Register Error => ' + error)

      Alert.alert('Error', 'Não foi possível registrar a chegada.')
    } finally {
      setIsLoading(false)
    }
  }

  async function notSynced() {
    const lastSync = await getLastSyncTimestamp()

    if (historic!.updated_at.getTime() > lastSync) {
      setDataNotSynced(true)
    }
  }

  useEffect(() => {
    notSynced()
  }, [])

  return {
    historic,
    isLoading,
    dataNotSynced,
    handleArrivalRegister,
    handleRemoveVehicleUsage,
  }
}
