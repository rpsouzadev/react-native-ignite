import * as S from './styles'
import ImgBg from '@assets/background.png'

import { Button } from '@components/Button'

export function SignIn() {
  return (
    <S.Container source={ImgBg}>
      <S.Title>Ignite Fleet</S.Title>
      <S.Slogan>Você em qualquer lugar!</S.Slogan>

      <Button title="Entrar com o Google" isLoading={false} />
    </S.Container>
  )
}
