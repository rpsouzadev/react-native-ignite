import * as S from './styles'
import { HomeHeader } from '@components/HomeHeader'
import { CarStatus } from '@components/CarStatus'

export function Home() {
  return (
    <S.Container>
      <HomeHeader />

      <S.Content>
        <CarStatus licensePlate="XXX-0000" />
      </S.Content>
    </S.Container>
  )
}
