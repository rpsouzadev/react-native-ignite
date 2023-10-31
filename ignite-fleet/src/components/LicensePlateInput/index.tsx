import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { TextInputProps } from 'react-native'

type LicensePlateInputProps = TextInputProps & {
  label: string
}

export function LicensePlateInput({ label, ...rest }: LicensePlateInputProps) {
  const { COLORS } = useTheme()

  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.Input
        maxLength={7}
        autoCapitalize="characters"
        placeholderTextColor={COLORS.GRAY_400}
        {...rest}
      />
    </S.Container>
  )
}
