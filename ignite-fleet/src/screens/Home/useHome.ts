import { Alert } from 'react-native'
import { useEffect, useState } from 'react'

import { useQuery, useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/Historic'
import { useNavigation } from '@react-navigation/native'

export function useHome() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)

  const realm = useRealm()

  const navigation = useNavigation()

  const historic = useQuery(Historic)

  function handleRegisterMovement() {
    if (vehicleInUse?._id) {
      return navigation.navigate('arrival', {
        id: vehicleInUse?._id.toString(),
      })
    } else {
      navigation.navigate('departure')
    }
  }

  function fetchVehicleInUser() {
    try {
      const vehicle = historic.filtered("status = 'departure'")[0]
      setVehicleInUse(vehicle)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Vaículo em uso',
        'Não foi possível carregar o veículo em uso.',
      )
    }
  }

  useEffect(() => {
    realm.addListener('change', () => fetchVehicleInUser())

    return () => realm.removeListener('change', () => fetchVehicleInUser)
  }, [])

  return {
    vehicleInUse,
    handleRegisterMovement,
  }
}
