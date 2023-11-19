import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { IconBoxProps } from '@components/ButtonIcon'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type TopMessageProps = {
  title: string
  icon?: IconBoxProps
}

export function TopMessage({ title, icon: Icon }: TopMessageProps) {
  const { COLORS } = useTheme()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top

  return (
    <S.Container style={{ paddingTop }}>
      {Icon && <Icon size={18} color={COLORS.GRAY_100} />}

      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
