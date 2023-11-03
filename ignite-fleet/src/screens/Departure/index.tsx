import * as S from './styles'
import { useRef, useState } from 'react'
import {
  Alert,
  Platform,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TextAreaInput } from '@components/TextAreaInput'
import { LicensePlateInput } from '@components/LicensePlateInput'
import { licensePlateValidate } from '@utils/licensePlateValidate'

const keyboardAvoidingViewBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const [description, setDescription] = useState('')
  const [licensePlate, setLicensePlate] = useState('')

  const descriptionRef = useRef<TextInput>(null)
  const licensePlateRef = useRef<TextInput>(null)

  function handleDepartureRegister() {
    if (!licensePlateValidate(licensePlate)) {
      licensePlateRef.current?.focus()
      Alert.alert(
        'Placa inválida',
        'A placa é inválida. Por favor, informe a placa correta do veículo.',
      )
    }
  }

  return (
    <S.Container>
      <Header title="Saída" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={keyboardAvoidingViewBehavior}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.Content>
            <LicensePlateInput
              ref={licensePlateRef}
              returnKeyType="next"
              placeholder="BRA1234"
              label="Placa do veículo"
              onChangeText={setLicensePlate}
              onSubmitEditing={() => descriptionRef.current?.focus()}
            />

            <TextAreaInput
              blurOnSubmit
              label="Finalidade"
              returnKeyType="send"
              ref={descriptionRef}
              placeholder="Vou utilizar o veículo para..."
              onChangeText={setDescription}
              onSubmitEditing={handleDepartureRegister}
            />

            <Button
              isLoading={false}
              title="Registrar Saída"
              onPress={handleDepartureRegister}
            />
          </S.Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </S.Container>
  )
}
