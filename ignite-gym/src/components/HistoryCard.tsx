import { HStack, Heading, Text, VStack } from 'native-base'

export function HistoryCard() {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg="gray.500"
      px={5}
      py={4}
      rounded="md"
      mb={3}
    >
      <VStack flex={1} mr={5}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={1}>
          Puxada Frontal
        </Text>
      </VStack>

      <Text color="gray.300">08:56</Text>
    </HStack>
  )
}
