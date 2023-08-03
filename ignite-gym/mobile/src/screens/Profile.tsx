import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  Center,
  ScrollView,
  Skeleton,
  Text,
  VStack,
  useToast,
} from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { UserPhoto } from '@components/UserPhoto'
import { ScreenHeader } from '@components/ScreenHeader'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

type FormDataProps = {
  name: string
  old_password: string
  password: string
  password_confirm: string
}

const profileSchema = yup.object({
  name: yup.string().required('Informe seu nome.'),
  old_password: yup
    .string()
    .required('Informe sua senha antiga.')
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password: yup
    .string()
    .required('Informe sua nova senha.')
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: yup
    .string()
    .required('Confirme sua nova senha.')
    .oneOf([yup.ref('password')], 'A senha não confere.'),
})

const PHOTO_SIZE = 24

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [usePhoto, setUserPhoto] = useState('https://github.com/muglly.png')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(profileSchema),
  })

  const toast = useToast()

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (!photoSelected.canceled) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri,
        )

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            title: 'essa imagem é muito grande, escolha uma de ate 5MB.',
            placement: 'top',
            bgColor: 'red.500',
          })
        }

        setUserPhoto(photoSelected.assets[0].uri)
        toast.show({
          title: 'Foto trocada com sucesso!',
          placement: 'top',
          bgColor: 'green.500',
        })
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

  function handleChangePassword(data: FormDataProps) {
    console.log(data)
  }

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
              source={{ uri: usePhoto }}
              alt="foto do usuario"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                bg="gray.600"
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

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

          <Controller
            control={control}
            name="old_password"
            render={({ field: { onChange, value } }) => (
              <Input
                bg="gray.600"
                placeholder="Senha antiga"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.old_password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                bg="gray.600"
                placeholder="Nova senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                bg="gray.600"
                placeholder="Confirme a nova senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_confirm?.message}
                onSubmitEditing={handleSubmit(handleChangePassword)}
                returnKeyType="send"
              />
            )}
          />

          <Button
            title="Atualizar"
            mt={4}
            onPress={handleSubmit(handleChangePassword)}
          />
        </Center>
      </ScrollView>
    </VStack>
  )
}
