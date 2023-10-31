import * as S from './styles'
import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  const { COLORS } = useTheme()
  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()

  const paddingTop = insets.top + 42

  return (
    <S.Container style={{ paddingTop }}>
      <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
        <ArrowLeft size={24} weight="bold" color={COLORS.BRAND_LIGHT} />
      </TouchableOpacity>

      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
