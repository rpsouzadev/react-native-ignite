import * as S from './styled'

type ListEmptyProps = {
  message: string
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}
