import * as S from './styles'
import { useUser, useApp } from '@realm/react'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function HomeHeader() {
  const user = useUser()
  const app = useApp()
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 32

  function handleLogOut() {
    app.currentUser?.logOut()
  }

  return (
    <S.Container style={{ paddingTop }}>
      <S.Picture
        source={{ uri: user?.profile.pictureUrl }}
        placeholder="L184i9ofbHof00ayjsay~qj[ayj@"
      />

      <S.Greeting>
        <S.Message>Olá</S.Message>

        <S.Name>{user?.profile.name}</S.Name>
      </S.Greeting>

      <TouchableOpacity onPress={handleLogOut}>
        <S.PowerIcon />
      </TouchableOpacity>
    </S.Container>
  )
}
