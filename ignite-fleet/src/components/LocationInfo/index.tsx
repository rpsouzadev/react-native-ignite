import * as S from './styles'

export type LocationInfoProps = {
  label: string
  description: string
}

type Props = LocationInfoProps

export function LocationInfo({ label, description }: Props) {
  return (
    <S.Container>
      <S.Info>
        <S.Label numberOfLines={1}>{label}</S.Label>

        <S.Description numberOfLines={1}>{description}</S.Description>
      </S.Info>
    </S.Container>
  )
}
