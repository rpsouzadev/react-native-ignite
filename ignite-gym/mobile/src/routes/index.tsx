import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

import { AuthContext } from '@contexts/AuthContext'
import { useContext } from 'react'

export function Routes() {
  const { colors } = useTheme()

  const contextData = useContext(AuthContext)
  console.log('Usuario logado => ', contextData)

  const theme = DefaultTheme
  theme.colors.background = colors.gray[700]

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}