import * as S from './styles'
import { forwardRef } from 'react'
import { useTheme } from 'styled-components/native'
import { TextInput, TextInputProps } from 'react-native'

type LicensePlateInputProps = TextInputProps & {
  label: string
}

export const LicensePlateInput = forwardRef<TextInput, LicensePlateInputProps>(
  ({ label, ...rest }, ref) => {
    const { COLORS } = useTheme()

    return (
      <S.Container>
        <S.Label>{label}</S.Label>

        <S.Input
          ref={ref}
          maxLength={7}
          autoCapitalize="characters"
          placeholderTextColor={COLORS.GRAY_400}
          {...rest}
        />
      </S.Container>
    )
  },
)
