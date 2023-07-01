import { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import * as S from './styles'
import { GroupCartd } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

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
    </S.Container>
  )
}
