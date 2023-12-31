import 'react-native-get-random-values'
import './src/libs/dayjs'

import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { RealmProvider, syncConfig } from '@libs/realm'
import { AppProvider, UserProvider } from '@realm/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import theme from './src/theme'

import { useNetInfo } from '@react-native-community/netinfo'

import { Routes } from '@routes/index'
import { SignIn } from './src/screens/SignIn'
import { Loading } from '@components/Loading'
import { WifiSlash } from 'phosphor-react-native'
import { TopMessage } from '@components/TopMessage'

const REALM_APP_ID = process.env.EXPO_PUBLIC_REALM_APP_ID as string

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  const netInfo = useNetInfo()

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider
          style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_800 }}
        >
          {!netInfo.isConnected && (
            <TopMessage title="Você está off-line" icon={WifiSlash} />
          )}

          <UserProvider fallback={<SignIn />}>
            <RealmProvider sync={syncConfig} fallback={Loading}>
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
