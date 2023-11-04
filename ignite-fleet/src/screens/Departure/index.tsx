import * as S from './styles'
import { useDeparture } from './useDeparture'
import { Platform, ScrollView, KeyboardAvoidingView } from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TextAreaInput } from '@components/TextAreaInput'
import { LicensePlateInput } from '@components/LicensePlateInput'

const keyboardAvoidingViewBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const {
    isRegistering,
    descriptionRef,
    setDescription,
    setLicensePlate,
    licensePlateRef,
    handleDepartureRegister,
  } = useDeparture()

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
              title="Registrar Saída"
              isLoading={isRegistering}
              onPress={handleDepartureRegister}
            />
          </S.Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </S.Container>
  )
}
