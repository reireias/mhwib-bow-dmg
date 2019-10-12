import bows from '@/constants/bow'
import motions from '@/constants/motion'
import monsters from '@/constants/monster'

export const defaultState = {
  bow: bows[0],
  motions: [motions[7]],
  monster: monsters[0],
  target: monsters[0].parts[0]
}
