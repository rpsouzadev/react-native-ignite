import * as S from './styles'
import { useHome } from './useHome'
import { FlatList } from 'react-native'
import { CloudArrowUp } from 'phosphor-react-native'

import { CarStatus } from '@components/CarStatus'
import { HomeHeader } from '@components/HomeHeader'
import { TopMessage } from '@components/TopMessage'
import { HistoricCard } from '@components/HistoricCard'

export function Home() {
  const {
    vehicleInUse,
    vehicleHistoric,
    percentageToSync,
    handleHistoricDetails,
    handleRegisterMovement,
  } = useHome()

  return (
    <S.Container>
      {percentageToSync && (
        <TopMessage title={percentageToSync} icon={CloudArrowUp} />
      )}

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
          renderItem={({ item }) => (
            <HistoricCard
              data={item}
              onPress={() => handleHistoricDetails(item.id)}
            />
          )}
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
