import * as S from './styles'
import { Key, Car } from 'phosphor-react-native'
import { useTheme } from 'styled-components'

type CarStatusProps = {
  licensePlate?: string | null
}

export function CarStatus({ licensePlate = null }: CarStatusProps) {
  const theme = useTheme()
  const Icon = licensePlate ? Key : Car
  const status = licensePlate ? 'chagada' : 'saída'
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso. `
    : `Nenhum veículo em uso. `

  return (
    <S.Container>
      <S.IconBox>
        <Icon size={32} color={theme.COLORS.BRAND_LIGHT} />
      </S.IconBox>

      <S.Message>
        {message}

        <S.TextHighlight>Clique aqui para registrar a {status}</S.TextHighlight>
      </S.Message>
    </S.Container>
  )
}
