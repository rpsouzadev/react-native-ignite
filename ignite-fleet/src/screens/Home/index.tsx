import * as S from './styles'
import { useHome } from './useHome'
import { FlatList } from 'react-native'

import { HomeHeader } from '@components/HomeHeader'
import { CarStatus } from '@components/CarStatus'
import { HistoricCard } from '@components/HistoricCard'

export function Home() {
  const { vehicleInUse, vehicleHistoric, handleRegisterMovement } = useHome()

  return (
    <S.Container>
      <HomeHeader />

      <S.Content>
        <CarStatus
          licensePlate={vehicleInUse?.license_plate}
          onPress={handleRegisterMovement}
        />

        <S.Title>Histórico</S.Title>

        <FlatList
          data={vehicleHistoric}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HistoricCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <S.EmptyList>Nenhum veículo registrado.</S.EmptyList>
          )}
        />
      </S.Content>
    </S.Container>
  )
}
