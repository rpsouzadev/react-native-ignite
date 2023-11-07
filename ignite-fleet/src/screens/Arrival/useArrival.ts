import { BSON } from 'realm'
import { useObject } from '@libs/realm'
import { useRoute } from '@react-navigation/native'
import { Historic } from '@libs/realm/schemas/Historic'

type RouteParamsProps = {
  id: string
}

export function useArrival() {
  const route = useRoute()
  const { id } = route.params as RouteParamsProps

  const historic = useObject(Historic, new BSON.UUID(id) as unknown as string)

  return {
    historic,
  }
}
