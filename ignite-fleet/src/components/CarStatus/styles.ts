/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 22px;
  margin: 32px 0;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const IconBox = styled.View`
  width: 77px;
  height: 77px;
  border-radius: 6px;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const Message = styled.Text`
  flex: 1;
  text-align: justify;
  textAlignVertical: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
export const TextHighlight = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
