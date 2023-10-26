import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { AppProvider, UserProvider } from '@realm/react'

import theme from './src/theme'

import { Routes } from '@routes/index'
import { SignIn } from './src/screens/SignIn'
import { Loading } from '@components/Loading'

const REALM_APP_ID = process.env.EXPO_PUBLIC_REALM_APP_ID as string

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <UserProvider fallback={<SignIn />}>
          <Routes />
        </UserProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      </ThemeProvider>
    </AppProvider>
  )
}
