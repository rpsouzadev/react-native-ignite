import { Box, HStack, Heading, Icon, Image, Text, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'

import { Button } from '@components/Button'

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada Frontal
          </Heading>

          <HStack>
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              constas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack p={8}>
        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/04/23/44/52/360_F_423445223_M4c9jw0g5dJb7SGWdmzXnnncIIaF9roM.jpg',
          }}
          alt="Nome do exercício"
          w="full"
          h={80}
          mb={3}
          rounded="lg"
          resizeMode="cover"
        />

        <Box bg="gray.600" p={4} rounded="lg">
          <HStack justifyContent="space-around" alignItems="center" mb={6}>
            <HStack alignItems="center">
              <SeriesSvg />
              <Text color="gray.200" ml={1}>
                3 séries
              </Text>
            </HStack>

            <HStack alignItems="center">
              <RepetitionsSvg />
              <Text color="gray.200" ml={1}>
                12 repetições
              </Text>
            </HStack>
          </HStack>

          <Button title="Marcar como realizado" />
        </Box>
      </VStack>
    </VStack>
  )
}
