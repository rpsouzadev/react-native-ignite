import * as S from './styles'
import { useHome } from './useHome'

import { HomeHeader } from '@components/HomeHeader'
import { CarStatus } from '@components/CarStatus'

export function Home() {
  const { vehicleInUse, handleRegisterMovement } = useHome()

  return (
    <S.Container>
      <HomeHeader />

      <S.Content>
        <CarStatus
          licensePlate={vehicleInUse?.license_plate}
          onPress={handleRegisterMovement}
        />
      </S.Content>
    </S.Container>
  )
}
