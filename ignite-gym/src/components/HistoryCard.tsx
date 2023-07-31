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
      <VStack>
        <Heading color="white" fontSize="md" textTransform="capitalize">
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
