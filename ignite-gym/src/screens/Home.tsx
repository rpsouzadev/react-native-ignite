import { HStack, VStack, FlatList, Heading, Text } from 'native-base'
import { useState } from 'react'

import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { ExerciseCard } from '@components/ExerciseCard'

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bíceps',
    'Trícipes',
    'Ombro',
  ])
  const [exercises, setExercises] = useState(['1', '2', '3', '4', '5'])
  const [groupSelected, setGroupSelected] = useState('costas')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              item.toLocaleUpperCase() === groupSelected.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 4 }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={4}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  )
}
