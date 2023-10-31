import styled from 'styled-components/native'

export const Container = styled.View`
  z-index: 1;
  width: 100%;
  flex-direction: row;
  padding: 0 32px 24px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
