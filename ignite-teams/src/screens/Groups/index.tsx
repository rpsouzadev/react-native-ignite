import { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import * as S from './styles'
import { GroupCartd } from '@components/GroupCard'

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Itech'])

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
      />
    </S.Container>
  )
}
