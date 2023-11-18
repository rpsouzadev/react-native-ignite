import * as S from './styles'
import { X } from 'phosphor-react-native'

import { useArrival } from './useArrival'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'

export function Arrival() {
  const { historic, handleRemoveVehicleUsage } = useArrival()

  return (
    <S.Container>
      <Header title="Chegada" />

      <S.Content>
        <S.Label>Placa do veículo</S.Label>

        <S.LicensePlate>{historic?.license_plate}</S.LicensePlate>

        <S.Label>Finalidade</S.Label>

        <S.Description>{historic?.description}</S.Description>

        <S.Footer>
          <ButtonIcon icon={X} onPress={handleRemoveVehicleUsage} />

          <Button title="Registrar chegada" />
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}
