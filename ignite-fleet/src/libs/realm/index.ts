import { createRealmContext } from '@realm/react'
import { Historic } from './schemas/Historic'

export const { useRealm, useQuery, useObject, RealmProvider } =
  createRealmContext({
    schema: [Historic],
  })
