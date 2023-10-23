import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  title: string
  isLoading: boolean
}

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <S.Container activeOpacity={0.7} disabled={isLoading} {...rest}>
      {isLoading ? <S.Loading /> : <S.Title>{title}</S.Title>}
    </S.Container>
  )
}
