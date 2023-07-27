import { NativeBaseProvider } from 'native-base'
import { StatusBar, View } from 'react-native'
import { Loading } from '@components/Loading'
import { THEME } from './src/theme'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {!fontsLoaded ? <View /> : <Loading />}
    </NativeBaseProvider>
  )
}
