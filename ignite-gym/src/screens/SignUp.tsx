import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import BackgroundImg from '@assets/background.png'
import { Button } from '@components/Button'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input'

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function hadleGoBack() {
    navigation.goBack()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={8}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Center mt={24} flex={1} justifyContent="flex-end">
          <Button
            title="Voltar para o login"
            variant="outline"
            onPress={hadleGoBack}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
