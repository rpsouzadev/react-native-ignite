import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { RealmProvider } from '@libs/realm'
import { AppProvider, UserProvider } from '@realm/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
        <SafeAreaProvider
          style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_800 }}
        >
          <UserProvider fallback={<SignIn />}>
            <RealmProvider>
              <Routes />
            </RealmProvider>
          </UserProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
