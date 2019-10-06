export const state = () => ({
  bow: null,
  custom: { attack: null, affinity: null, element: null },
  parts: null,
  buf: {
    coating: null,
    powerCharm: true,
    powerTalon: true,
    demonPowder: true,
    canteen: 15,
    demonDrug: null,
    seed: 10
  },
  motions: [],
  monster: null,
  target: null
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
  setMotions(state, motions) {
    state.motions = motions
  },
  setMonster(state, monster) {
    state.monster = monster
  },
  setTarget(state, target) {
    state.target = target
  },
  setBuf(state, buf) {
    state.buf = Object.assign({}, state.buf, buf)
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
  setMotions({ commit }, payload) {
    commit('setMotions', payload)
  },
  setMonster({ commit }, payload) {
    commit('setMonster', payload)
  },
  setTarget({ commit }, payload) {
    commit('setTarget', payload)
  },
  setBuf({ commit }, payload) {
    commit('setBuf', payload)
  }
}

export const getters = {
  // 武器 + カスタム強化 + パーツ強化の値
  calcuratedWeapon(state, getters) {
    const attack = state.bow
      ? state.bow.attack +
        (getters.customAttackValue + getters.partsValue.attack) * 1.2
      : null
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
  }
}
