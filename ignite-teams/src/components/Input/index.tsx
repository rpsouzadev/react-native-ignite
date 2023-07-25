import React from 'react'
import * as S from './styled'
import { useTheme } from 'styled-components/native'
import { TextInputProps, TextInput } from 'react-native'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: Props) {
  const theme = useTheme()
  return (
    <S.Container
      ref={inputRef}
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  )
}
