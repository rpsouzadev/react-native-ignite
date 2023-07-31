import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Center, ScrollView, Skeleton, Text, VStack } from 'native-base'

import { UserPhoto } from '@components/UserPhoto'
import { ScreenHeader } from '@components/ScreenHeader'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

const PHOTO_SIZE = 24

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: 'https://github.com/muglly.png' }}
              alt="foto do usuario"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontSize="md"
              fontWeight="bold"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input bg="gray.600" placeholder="Nome" />
          <Input bg="gray.600" placeholder="Email" isDisabled />

          <Text
            color="white"
            fontSize="md"
            fontWeight="bold"
            mb={4}
            mt={12}
            alignSelf="flex-start"
          >
            Alterar senha
          </Text>

          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atulizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  )
}
