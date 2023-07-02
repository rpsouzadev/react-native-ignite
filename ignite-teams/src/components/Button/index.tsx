import { TouchableHighlightProps } from 'react-native'

import * as S from './styled'

type Props = TouchableHighlightProps & {
  title: string
  type?: S.ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
