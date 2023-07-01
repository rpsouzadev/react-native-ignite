import { TouchableOpacityProps } from 'react-native'

import * as S from './styled'

type GroupCartdProps = TouchableOpacityProps & {
  title: string
}

export function GroupCartd({ title, ...rest }: GroupCartdProps) {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
