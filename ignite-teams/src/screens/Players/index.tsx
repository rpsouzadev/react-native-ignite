import * as S from './styled'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumbersOfPlayers>{players.length}</S.NumbersOfPlayers>
      </S.HeaderList>
    </S.Container>
  )
}
