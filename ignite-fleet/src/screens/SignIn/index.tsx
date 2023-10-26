import { Alert } from 'react-native'
import { useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { Realm, useApp } from '@realm/react'

import * as S from './styles'
import ImgBg from '@assets/background.png'

import { Button } from '@components/Button'

WebBrowser.maybeCompleteAuthSession()

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const app = useApp()

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_CLIENT_ID,
    scopes: ['profile', 'email'],
  })

  function handleGoogleSignIn() {
    setIsAuthenticating(true)

    googleSignIn().then((response) => {
      if (response.type !== 'success') {
        setIsAuthenticating(false)
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      if (response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(
          response.authentication.idToken,
        )

        app.logIn(credentials).catch((error) => {
          console.log(error)
          Alert.alert(
            'Entrar',
            'Não foi possível conectar-se com a conta do google;',
          )
          setIsAuthenticating(false)
        })
      } else {
        Alert.alert(
          'Entrar',
          'Não foi possível conectar-se com a conta do google;',
        )
        setIsAuthenticating(false)
      }
    }
  }, [response])

  return (
    <S.Container source={ImgBg}>
      <S.Title>Ignite Fleet</S.Title>
      <S.Slogan>Você em qualquer lugar!</S.Slogan>

      <Button
        title="Entrar com o Google"
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />
    </S.Container>
  )
}
