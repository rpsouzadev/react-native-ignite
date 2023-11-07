import { useUser } from '@realm/react'
import { useState, useRef } from 'react'
import { Alert, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useRealm } from '@libs/realm'
import { Historic } from '@libs/realm/schemas/Historic'

import { licensePlateValidate } from '@utils/licensePlateValidate'

export function useDeparture() {
  const [description, setDescription] = useState('')
  const [licensePlate, setLicensePlate] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)

  const navigation = useNavigation()
  const realm = useRealm()
  const user = useUser()

  const descriptionRef = useRef<TextInput>(null)
  const licensePlateRef = useRef<TextInput>(null)

  function handleDepartureRegister() {
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

      setIsRegistering(true)

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

  return {
    isRegistering,
    descriptionRef,
    setDescription,
    licensePlateRef,
    setLicensePlate,
    handleDepartureRegister,
  }
}
