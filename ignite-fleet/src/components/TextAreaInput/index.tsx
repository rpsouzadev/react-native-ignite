import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { TextInputProps } from 'react-native'

type TextAreaInputProps = TextInputProps & {
  label: string
}

export function TextAreaInput({ label, ...rest }: TextAreaInputProps) {
  const { COLORS } = useTheme()

  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.Input
        multiline
        autoCapitalize="sentences"
        placeholderTextColor={COLORS.GRAY_400}
        {...rest}
      />
    </S.Container>
  )
}
