import * as S from './styles'
import { IconBox } from '@components/IconBox'
import { IconBoxProps } from '@components/ButtonIcon'

export type LocationInfoProps = {
  label: string
  description: string
}

type Props = LocationInfoProps & {
  icon: IconBoxProps
}

export function LocationInfo({ icon, label, description }: Props) {
  return (
    <S.Container>
      <IconBox icon={icon} />

      <S.Info>
        <S.Label numberOfLines={1}>{label}</S.Label>

        <S.Description numberOfLines={1}>{description}</S.Description>
      </S.Info>
    </S.Container>
  )
}
