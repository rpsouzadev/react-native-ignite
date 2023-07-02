import styled from 'styled-components/native'
import { TextInput } from 'react-native'
// import { UsersThree } from 'phosphor-react-native'

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  padding: 16px;
`
