import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const dimensions = Dimensions.get('window')

export const Container = styled.View`
  z-index: 1;
  position: absolute;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${dimensions.width}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
export const Title = styled.Text`
  margin-left: 4px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
