import * as S from './styles'
import { X } from 'phosphor-react-native'

import { useArrival } from './useArrival'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Map } from '@components/Map'

export function Arrival() {
  const {
    historic,
    isLoading,
    coordinates,
    dataNotSynced,
    handleArrivalRegister,
    handleRemoveVehicleUsage,
  } = useArrival()

  const title = historic?.status === 'arrival' ? 'Detalhes' : 'Chegada'

  return (
    <S.Container>
      <Header title={title} />

      {coordinates.length > 0 && <Map coordinates={coordinates} />}

      <S.Content>
        <S.Label>Placa do veículo</S.Label>

        <S.LicensePlate>{historic?.license_plate}</S.LicensePlate>

        <S.Label>Finalidade</S.Label>

        <S.Description>{historic?.description}</S.Description>
      </S.Content>

      {historic?.status === 'departure' && (
        <S.Footer>
          <ButtonIcon icon={X} onPress={handleRemoveVehicleUsage} />

          <Button
            title="Registrar chegada"
            isLoading={isLoading}
            onPress={handleArrivalRegister}
          />
        </S.Footer>
      )}

      {dataNotSynced && (
        <S.AsyncMessage>
          Sinconização da
          {historic?.status === 'departure' ? ' partda ' : ' chegada '}
          pendente.
        </S.AsyncMessage>
      )}
    </S.Container>
  )
}
