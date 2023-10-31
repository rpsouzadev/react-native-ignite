import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

import { HomeHeader } from '@components/HomeHeader'
import { CarStatus } from '@components/CarStatus'

export function Home() {
  const navigation = useNavigation()

  function handleRegisterMovement() {
    navigation.navigate('departure')
  }

  return (
    <S.Container>
      <HomeHeader />

      <S.Content>
        <CarStatus onPress={handleRegisterMovement} />
      </S.Content>
    </S.Container>
  )
}
