import * as S from './styles'
import { X } from 'phosphor-react-native'

import { useArrival } from './useArrival'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'

export function Arrival() {
  const {
    historic,
    isLoading,
    handleArrivalRegister,
    handleRemoveVehicleUsage,
  } = useArrival()

  const title = historic?.status === 'arrival' ? 'Detalhes' : 'Chegada'

  return (
    <S.Container>
      <Header title={title} />

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
    </S.Container>
  )
}