import * as S from './styled'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
  const navigation = useNavigation()

  function handleNew() {
    navigation.navigate('players', { group: 'Itech' })
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </S.Content>
    </S.Container>
  )
}
