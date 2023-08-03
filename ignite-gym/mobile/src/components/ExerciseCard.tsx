import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        alignItems="center"
        bg="gray.500"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/04/23/44/52/360_F_423445223_M4c9jw0g5dJb7SGWdmzXnnncIIaF9roM.jpg',
          }}
          alt="Imagem do exercicio de costa"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading color="white" fontSize="lg" fontFamily="heading">
            Puxador frontal
          </Heading>
          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            3 series x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}
