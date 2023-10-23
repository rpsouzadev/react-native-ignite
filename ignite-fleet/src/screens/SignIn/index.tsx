import * as S from './styles'
import ImgBg from '@assets/background.png'

export function SignIn() {
  return (
    <S.Container source={ImgBg}>
      <S.Title>Ignite Fleet</S.Title>
      <S.Slogan>Você em qualquer lugar!</S.Slogan>
    </S.Container>
  )
}
