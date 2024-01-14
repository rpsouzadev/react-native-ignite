import { useUser } from '@realm/react'
import { useState, useRef, useEffect } from 'react'
import { Alert, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  useForegroundPermissions,
  requestBackgroundPermissionsAsync,
  watchPositionAsync,
  LocationAccuracy,
  LocationSubscription,
  LocationObjectCoords,
} from 'expo-location'

import { useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/Historic'

import { getAddressLocation } from '@utils/getAddressLocation'
import { licensePlateValidate } from '@utils/licensePlateValidate'
import { startLocationTask } from '@tasks/backgroundLocationTask'

export function useDeparture() {
  const [description, setDescription] = useState('')
  const [licensePlate, setLicensePlate] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [isLoadingLocation, setIsLoadingLocation] = useState(true)
  const [currentAddress, setCurrentAddress] = useState<string | null>(null)
  const [currentCoords, setCurrentCoords] =
    useState<LocationObjectCoords | null>(null)

  const [locationForegroundPermission, requestLocationForegroundPermission] =
    useForegroundPermissions()

  const navigation = useNavigation()
  const realm = useRealm()
  const user = useUser()

  const descriptionRef = useRef<TextInput>(null)
  const licensePlateRef = useRef<TextInput>(null)

  async function handleDepartureRegister() {
    try {
      if (!licensePlateValidate(licensePlate)) {
        licensePlateRef.current?.focus()
        Alert.alert(
          'Placa inválida',
          'A placa é inválida. Por favor, informe a placa correta do veículo.',
        )
        return
      }

      if (description.trim().length === 0) {
        descriptionRef.current?.focus()
        Alert.alert(
          'Finalidade',
          'Por favor, informe a finalidade da utilização do veículo.',
        )
        return
      }

      if (!currentCoords?.latitude && !currentCoords?.longitude) {
        return Alert.alert(
          'Localização!',
          'Não foi possível obter a localização atual. Tente novamente.',
        )
      }

      setIsRegistering(true)

      const backgroundPermissions = await requestBackgroundPermissionsAsync()

      if (!backgroundPermissions.granted) {
        setIsRegistering(false)

        return Alert.alert(
          'Localização!',
          'É necessário permitir que o App tenha acesso a localização em segundo plano. Acesse as configurações do dispositivo e habilite "Permitir o tempo todo"',
        )
      }

      await startLocationTask()

      realm.write(() => {
        realm.create(
          'Historic',
          Historic.generate({
            user_id: user.id,
            license_plate: licensePlate.toUpperCase(),
            description,
          }),
        )
      })

      Alert.alert('Saída', 'Saída do veículo registrada com sucesso!')

      navigation.goBack()
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Não foi possível registrar a saída do veículo.')
    } finally {
      setIsRegistering(false)
    }
  }

  useEffect(() => {
    requestLocationForegroundPermission()
  }, [])

  useEffect(() => {
    if (!locationForegroundPermission?.granted) {
      return
    }

    let subscription: LocationSubscription

    watchPositionAsync(
      {
        accuracy: LocationAccuracy.High,
        timeInterval: 1000,
      },
      (location) => {
        setCurrentCoords(location.coords)

        getAddressLocation(location.coords)
          .then((address) => {
            if (address) {
              setCurrentAddress(address)
            }
          })
          .finally(() => setIsLoadingLocation(false))
      },
    ).then((response) => (subscription = response))

    return () => {
      if (subscription) {
        subscription.remove()
      }
    }
  }, [locationForegroundPermission])

  return {
    isRegistering,
    currentCoords,
    descriptionRef,
    setDescription,
    currentAddress,
    licensePlateRef,
    setLicensePlate,
    isLoadingLocation,
    handleDepartureRegister,
    locationForegroundPermission,
  }
}
