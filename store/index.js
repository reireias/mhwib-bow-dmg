export const state = () => ({
  bow: null,
  custom: { attack: null, affinity: null, element: null },
  parts: null,
  buff: {
    coating: null,
    powerCharm: true,
    powerTalon: true,
    demonPowder: true,
    canteen: 15,
    demonDrug: null,
    seed: 10
  },
  skill: {
    weaknessExploit: 3,
    elementAttack: 6
  },
  motions: [],
  monster: null,
  target: null,
  anger: true,
  wounded: true
})

export const mutations = {
  setBow(state, bow) {
    state.bow = bow
  },
  setCustomAttack(state, attack) {
    state.custom.attack = attack
  },
  setCustomAffinity(state, affinity) {
    state.custom.affinity = affinity
  },
  setCustomElement(state, element) {
    state.custom.element = element
  },
  setParts(state, parts) {
    state.parts = parts
  },
  setBuff(state, buff) {
    state.buff = Object.assign({}, state.buff, buff)
  },
  setSkill(state, skill) {
    state.skill = Object.assign({}, state.skill, skill)
  },
  setMotions(state, motions) {
    state.motions = motions
  },
  setMonster(state, monster) {
    state.monster = monster
  },
  setTarget(state, target) {
    state.target = target
  },
  setAnger(state, anger) {
    state.anger = anger
  },
  setWounded(state, wounded) {
    state.wounded = wounded
  }
}

export const actions = {
  setBow({ commit }, payload) {
    commit('setBow', payload)
  },
  setCustomAttack({ commit }, payload) {
    commit('setCustomAttack', payload)
  },
  setCustomAffinity({ commit }, payload) {
    commit('setCustomAffinity', payload)
  },
  setCustomElement({ commit }, payload) {
    commit('setCustomElement', payload)
  },
  setParts({ commit }, payload) {
    commit('setParts', payload)
  },
  setBuff({ commit }, payload) {
    commit('setBuff', payload)
  },
  setSkill({ commit }, payload) {
    commit('setSkill', payload)
  },
  setMotions({ commit }, payload) {
    commit('setMotions', payload)
  },
  setMonster({ commit }, payload) {
    commit('setMonster', payload)
  },
  setTarget({ commit }, payload) {
    commit('setTarget', payload)
  },
  setAnger({ commit }, payload) {
    commit('setAnger', payload)
  },
  setWounded({ commit }, payload) {
    commit('setWounded', payload)
  }
}

export const getters = {
  // 武器 + カスタム強化 + パーツ強化の値
  calcuratedWeapon(state, getters) {
    const attack = state.bow
      ? state.bow.attack +
        (getters.customAttackValue + getters.partsValue.attack) * 1.2
      : null
    const rawAttack = attack ? attack / 1.2 : null
    const affinity = state.bow
      ? state.bow.affinity +
        getters.customAffinityValue +
        getters.partsValue.affinity
      : null
    const element = state.bow
      ? state.bow.element.value +
        getters.customElementValue +
        getters.partsValue.element
      : null
    return {
      attack,
      rawAttack,
      affinity,
      element
    }
  },
  customAttackValue(state) {
    return state.custom.attack ? state.custom.attack.value : 0
  },
  customAffinityValue(state) {
    return state.custom.affinity ? state.custom.affinity.value : 0
  },
  customElementValue(state) {
    return state.custom.element ? state.custom.element.value : 0
  },
  partsValue(state) {
    return state.parts
      ? state.parts.value
      : { attack: 0, affinity: 0, element: 0 }
  },
  buff(state) {
    const buff = { ...state.buff }
    switch (buff.coating) {
      case 1.35:
        buff.coating = 'power'
        break
      case 1.2:
        buff.coating = 'crossRange'
        break
      default:
        buff.coating = undefined
        break
    }
    return buff
  }
}
