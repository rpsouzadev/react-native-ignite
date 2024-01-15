import { Alert } from 'react-native'
import { LatLng } from 'react-native-maps'
import { useEffect, useState } from 'react'

import { BSON } from 'realm'
import { useObject, useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/Historic'
import { useRoute, useNavigation } from '@react-navigation/native'
import { getLastSyncTimestamp } from '@libs/asyncStorage/syncStorage'
import { stopLocationTask } from '@tasks/backgroundLocationTask'
import { getStorageLocations } from '@libs/asyncStorage/locationStorage'

type RouteParamsProps = {
  id: string
}

export function useArrival() {
  const [isLoading, setIsLoading] = useState(false)
  const [dataNotSynced, setDataNotSynced] = useState(false)
  const [coordinates, setCoordinates] = useState<LatLng[]>([])

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
        onPress: async () => {
          await removeVehicleUsage()
        },
      },
    ])
  }

  async function removeVehicleUsage() {
    realm.write(() => {
      realm.delete(historic)
    })

    await stopLocationTask()

    navigation.goBack()
  }

  async function handleArrivalRegister() {
    try {
      setIsLoading(true)

      if (!historic) {
        return Alert.alert('Error', 'Não foi obter os dados do veículo.')
      }

      realm.write(() => {
        historic.status = 'arrival'
        historic.updated_at = new Date()
      })

      await stopLocationTask()

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

  async function getLocationsInfo() {
    await notSynced()

    const locationsStorage = await getStorageLocations()
    setCoordinates(locationsStorage)
  }

  useEffect(() => {
    getLocationsInfo()
  }, [historic])

  return {
    historic,
    isLoading,
    coordinates,
    dataNotSynced,
    handleArrivalRegister,
    handleRemoveVehicleUsage,
  }
}
