import * as S from './styles'
import { useDeparture } from './useDeparture'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Car } from 'phosphor-react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'
import { LocationInfo } from '@components/LocationInfo'
import { TextAreaInput } from '@components/TextAreaInput'
import { LicensePlateInput } from '@components/LicensePlateInput'
import { Map } from '@components/Map'

export function Departure() {
  const {
    isRegistering,
    currentCoords,
    descriptionRef,
    setDescription,
    currentAddress,
    setLicensePlate,
    licensePlateRef,
    isLoadingLocation,
    handleDepartureRegister,
    locationForegroundPermission,
  } = useDeparture()

  if (isLoadingLocation) {
    return <Loading />
  }

  if (!locationForegroundPermission?.granted) {
    return (
      <S.Container>
        <Header title="Saída" />

        <S.Message>
          Você precisa permitir que o aplicativo tenha acesso a localização.
        </S.Message>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <Header title="Saída" />

      <KeyboardAwareScrollView extraHeight={100}>
        {currentCoords && (
          <Map
            coordinates={[
              { latitude: -12.9248, longitude: -38.483 },
              { latitude: -12.922, longitude: -38.4827 },
            ]}
          />
        )}

        <S.Content>
          {currentAddress && (
            <LocationInfo
              icon={Car}
              label="Localização atual"
              description={currentAddress}
            />
          )}

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
      </KeyboardAwareScrollView>
    </S.Container>
  )
}
