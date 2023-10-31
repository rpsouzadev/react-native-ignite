import * as S from './styles'
import { forwardRef } from 'react'
import { useTheme } from 'styled-components/native'
import { TextInput, TextInputProps } from 'react-native'

type TextAreaInputProps = TextInputProps & {
  label: string
}

export const TextAreaInput = forwardRef<TextInput, TextAreaInputProps>(
  ({ label, ...rest }, ref) => {
    const { COLORS } = useTheme()

    return (
      <S.Container>
        <S.Label>{label}</S.Label>

        <S.Input
          ref={ref}
          multiline
          autoCapitalize="sentences"
          placeholderTextColor={COLORS.GRAY_400}
          {...rest}
        />
      </S.Container>
    )
  },
)
