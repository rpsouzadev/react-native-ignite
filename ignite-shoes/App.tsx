import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { tagUserInfoCreate } from './src/notifications/notificationsTags';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';


OneSignal.setAppId(process.env.EXPO_PUBLIC_ONE_SIGNAL_ID);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate()

  useEffect(() => {
    const unsubscribe = OneSignal.setNotificationOpenedHandler((response) => {
      const {actionId} = response.action as any;

      switch (actionId) {
        case '1':
          return console.log('ver')
        case '2':
          return console.log('fechar')
        default: 'Não foi escolhido nenuma opção'
      }
    })

    return () => unsubscribe
  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}