import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'
import { Key, Car } from 'phosphor-react-native'
import { useTheme } from 'styled-components'

type CarStatusProps = TouchableOpacityProps & {
  licensePlate?: string | null
}

export function CarStatus({ licensePlate = null, ...rest }: CarStatusProps) {
  const theme = useTheme()
  const Icon = licensePlate ? Car : Key
  const status = licensePlate ? 'chagada' : 'saída'
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso. `
    : `Nenhum veículo em uso. `

  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.IconBox>
        <Icon size={52} color={theme.COLORS.BRAND_LIGHT} />
      </S.IconBox>

      <S.Message>
        {message}

        <S.TextHighlight>Clique aqui para registrar a {status}</S.TextHighlight>
      </S.Message>
    </S.Container>
  )
}
