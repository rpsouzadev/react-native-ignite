import * as S from './styles'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { GroupCartd } from '@components/GroupCard'
import { useNavigation } from '@react-navigation/native'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCartd key={`title-${item}`} title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Adicione uma turma para jogar!" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  )
}
