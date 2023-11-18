import { BSON } from 'realm'
import { Alert } from 'react-native'
import { useObject, useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/Historic'
import { useRoute, useNavigation } from '@react-navigation/native'

type RouteParamsProps = {
  id: string
}

export function useArrival() {
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

  return {
    historic,
    handleRemoveVehicleUsage,
  }
}
