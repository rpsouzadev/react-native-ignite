import * as S from './styles'
import { useRef } from 'react'
import { TextInput } from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TextAreaInput } from '@components/TextAreaInput'
import { LicensePlateInput } from '@components/LicensePlateInput'

export function Departure() {
  const descriptionRef = useRef<TextInput>(null)

  function handleDepartureRegister() {
    console.log('Ok!')
  }

  return (
    <S.Container>
      <Header title="Saída" />

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
    </S.Container>
  )
}
