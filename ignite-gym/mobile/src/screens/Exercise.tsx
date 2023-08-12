import { useEffect, useState } from 'react'
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
  ScrollView,
  useToast,
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { ExerciseDTO } from '@dtos/ExerciseDTO'

import { Button } from '@components/Button'

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Loading } from '@components/Loading'

type RouteParamsProps = {
  exerciseId: string
}

export function Exercise() {
  const [isLoading, setIsLoading] = useState(true)
  const [sendingRegister, setSendingRegister] = useState(false)
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO)
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute()
  const { exerciseId } = route.params as RouteParamsProps

  const toast = useToast()

  function handleGoBack() {
    navigation.goBack()
  }

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true)

      const response = await api.get(`/exercises/${exerciseId}`)

      setExercise(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi posivel carregar os detalhes do exercício.'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleExerciseHistoryRegister() {
    try {
      setSendingRegister(true)

      await api.post('/history', { exercise_id: exerciseId })

      toast.show({
        title: 'Parabéns, exercício registrado com sucesso no seu histórico.',
        placement: 'top',
        bgColor: 'green.500',
      })

      navigation.navigate('history')
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi posivel marcar como realizado.'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setSendingRegister(false)
    }
  }

  useEffect(() => {
    fetchExerciseDetails()
  }, [exerciseId])

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
          <Heading
            color="gray.100"
            fontSize="lg"
            fontFamily="heading"
            flexShrink={1}
          >
            {exercise.name}
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <VStack p={8}>
            <Box mb={3} rounded="lg" overflow="hidden">
              <Image
                source={{
                  uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
                }}
                alt="Nome do exercício"
                w="full"
                h={80}
                resizeMode="cover"
              />
            </Box>

            <Box bg="gray.600" p={4} rounded="lg">
              <HStack justifyContent="space-around" alignItems="center" mb={6}>
                <HStack alignItems="center">
                  <SeriesSvg />
                  <Text color="gray.200" ml={1}>
                    {exercise.series} séries
                  </Text>
                </HStack>

                <HStack alignItems="center">
                  <RepetitionsSvg />
                  <Text color="gray.200" ml={1}>
                    {exercise.repetitions} repetições
                  </Text>
                </HStack>
              </HStack>

              <Button
                title="Marcar como realizado"
                isLoading={sendingRegister}
                onPress={handleExerciseHistoryRegister}
              />
            </Box>
          </VStack>
        </ScrollView>
      )}
    </VStack>
  )
}
