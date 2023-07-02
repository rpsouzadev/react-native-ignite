import * as S from './styled'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'

export function NewGroup() {
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar as pessoas"
        />
        <Button title="Criar" />
      </S.Content>
    </S.Container>
  )
}
