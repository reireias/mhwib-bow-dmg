import Vuex from 'vuex'
import bows from '@/constants/bow'
import motions from '@/constants/motion'
import monsters from '@/constants/monster'

const baseState = () => {
  return {
    bow: bows[0],
    custom: { attack: null, affinity: null, element: null },
    parts: null,
    buff: {
      coating: null,
      powerCharm: true,
      powerTalon: true,
      demonPowder: true,
      canteen: 15,
      demonDrug: null,
      seed: 10,
    },
    skill: {
      weaknessExploit: 3,
      elementAttack: 6,
    },
    motions: [motions[0]],
    monster: monsters[0],
    target: monsters[0].parts[0],
    wounded: true,
  }
}

export const createStore = (getters = null, actions = null) => {
  return new Vuex.Store({
    state: baseState(),
    actions,
    getters,
  })
}

export const createFullSkillStore = () => {
  const state = baseState()
  state.skill = {
    attackBoost: 7,
    criticalEye: 7,
    weaknessExploit: 3,
    criticalBoost: 3,
    agitator: 7,
    peakPerformance: 3,
    latentPower: 6,
    fortify: 2,
    elementAttack: 6,
    freeElem: 3,
    criticalElement: 2,
    elementBoost: 2,
  }
  return new Vuex.Store({ state })
}

export const buildResult = () => {
  return {
    id: '00000000001',
    bow: 'bow name',
    motion: 'name [10x5, 1.0]',
    base: '物理: 10, 属性: 10',
    critical: '物理: 20, 属性: 20',
    expected: '物理: 15, 属性: 15',
    total: '75',
  }
}
