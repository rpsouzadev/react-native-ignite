import * as S from './styles'
import { IconProps } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

export type IconBoxProps = (icon: IconProps) => JSX.Element

type IIconBoxProps = {
  size?: S.SizeProps
  icon: IconBoxProps
}

export function IconBox({ size = 'NORMAL', icon: Icon }: IIconBoxProps) {
  const { COLORS } = useTheme()
  const iconSize = size === 'NORMAL' ? 24 : 16

  return (
    <S.Container size={size}>
      <Icon size={iconSize} color={COLORS.BRAND_LIGHT} />
    </S.Container>
  )
}
