/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '../storageConfig'

export async function groupCreate(newGroup: string) {
  try {
    await AsyncStorage.setItem(GROUP_COLLECTION, newGroup)
  } catch (error) {
    throw error
  }
}
