import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import * as S from './styles'
import { GroupCartd } from '@components/GroupCard'

export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCartd title="Galera da Itech" />
    </S.Container>
  )
}
