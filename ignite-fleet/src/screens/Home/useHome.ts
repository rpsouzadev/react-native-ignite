import { Alert } from 'react-native'
import { useEffect, useState } from 'react'

import { useQuery } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/Historic'
import { useNavigation } from '@react-navigation/native'

export function useHome() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)

  const navigation = useNavigation()

  const historic = useQuery(Historic)

  function handleRegisterMovement() {
    navigation.navigate('departure')
  }

  function fetchVehicle() {
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
    fetchVehicle()
  }, [])

  return {
    vehicleInUse,
    handleRegisterMovement,
  }
}
