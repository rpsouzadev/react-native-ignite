/* eslint-disable no-useless-catch */
import { playerGetByGroup } from './playersGetByGroup'

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storedPlayers = await playerGetByGroup(group)
    const players = storedPlayers.filter((players) => players.team === team)
    return players
  } catch (error) {
    throw error
  }
}
