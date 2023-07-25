/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from '../storageConfig'
import { AppError } from '@utils/AppErro'
import { playerGetByGroup } from './playersGetByGroup'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await playerGetByGroup(group)
    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name,
    )
    if (playerAlreadyExists.length > 0) {
      throw new AppError('O jogador já está no time')
    }
    const storage = JSON.stringify([...storedPlayers, newPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
