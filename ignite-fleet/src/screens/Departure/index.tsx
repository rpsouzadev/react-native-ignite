import * as S from './styles'
import { useRef } from 'react'
import {
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TextAreaInput } from '@components/TextAreaInput'
import { LicensePlateInput } from '@components/LicensePlateInput'

const keyboardAvoidingViewBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const descriptionRef = useRef<TextInput>(null)

  function handleDepartureRegister() {
    console.log('Ok!')
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
              returnKeyType="next"
              placeholder="BRA1234"
              label="Placa do veículo"
              onSubmitEditing={() => descriptionRef.current?.focus()}
            />

            <TextAreaInput
              blurOnSubmit
              label="Finalidade"
              returnKeyType="send"
              ref={descriptionRef}
              placeholder="Vou utilizar o veículo para..."
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
