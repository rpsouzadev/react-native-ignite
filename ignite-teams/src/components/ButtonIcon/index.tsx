import * as S from './styled'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: S.ButtonIconTypeStyleProps
}

export function ButtonIcon({
  icon,
  type = 'PRIMARY',
  ...rest
}: ButtonIconProps) {
  return (
    <S.Container {...rest}>
      <S.Icon type={type} name={icon} />
    </S.Container>
  )
}
