import { useNavigation } from '@react-navigation/native'
import * as S from './styled'

import LogoImg from '@assets/logo.png'

type HeaderProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={LogoImg} />
    </S.Container>
  )
}
