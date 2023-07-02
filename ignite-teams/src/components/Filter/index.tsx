import * as S from './styled'
import { TouchableOpacityProps } from 'react-native'

type FilterProps = TouchableOpacityProps &
  S.FilterStyledProps & {
    title: string
  }

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
