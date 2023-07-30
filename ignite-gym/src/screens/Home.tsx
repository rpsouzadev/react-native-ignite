import { HStack, VStack, FlatList } from 'native-base'
import { useState } from 'react'

import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bíceps',
    'Trícipes',
    'Ombro',
  ])
  const [groupSelected, setGroupSelected] = useState('costa')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={item === groupSelected}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 4 }}
        my={10}
        maxH={10}
      />
    </VStack>
  )
}
