import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { IconProps } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'

export type IconBoxProps = (props: IconProps) => JSX.Element

type ButtonIconProps = TouchableOpacityProps & {
  icon: IconBoxProps
}

export function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
  const { COLORS } = useTheme()

  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <Icon size={24} color={COLORS.BRAND_MID} />
    </S.Container>
  )
}
