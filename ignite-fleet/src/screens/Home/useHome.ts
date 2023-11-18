import { Alert } from 'react-native'
import { useEffect, useState } from 'react'

import dayjs from 'dayjs'
import { useQuery, useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/Historic'
import { useNavigation } from '@react-navigation/native'
import { HistoricCardProps } from '@components/HistoricCard'

export function useHome() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)
  const [vehicleHistoric, setVehicleHistoric] = useState<HistoricCardProps[]>(
    [],
  )

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

  function fetchHistoric() {
    try {
      const response = historic.filtered(
        "status = 'arrival' SORT(created_at DESC)",
      )

      const formatthedHistoric = response.map((item) => {
        return {
          id: item._id,
          isSync: false,
          licensePlate: item.license_plate,
          created: dayjs(item.created_at).format(
            '[Saída em] DD/MM/YYYY [às] HH:mm',
          ),
        }
      })

      setVehicleHistoric(formatthedHistoric)
    } catch (error) {
      console.log('fetchHistoric =>', error)
      Alert.alert('Histórico', 'Não foi possível carregar o histórico.')
    }
  }

  function handleHistoricDetails(id: string) {
    navigation.navigate('arrival', { id })
  }

  useEffect(() => {
    fetchVehicleInUser()
  }, [])

  useEffect(() => {
    realm.addListener('change', () => fetchVehicleInUser())

    return () => {
      if (realm && !realm.isClosed) {
        realm.removeListener('change', () => fetchVehicleInUser)
      }
    }
  }, [])

  useEffect(() => {
    fetchHistoric()
  }, [historic])

  return {
    vehicleInUse,
    vehicleHistoric,
    handleHistoricDetails,
    handleRegisterMovement,
  }
}
