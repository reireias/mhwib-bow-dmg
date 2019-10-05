export const state = () => ({
  bow: null,
  custom: { attack: null, affinity: null, element: null }
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
  }
}

export const getters = {
  // 武器 + カスタム強化 + パーツ強化の値
  calcuratedWeapon(state, getters) {
    const attack = state.bow
      ? state.bow.attack + getters.customAttackValue * 1.2
      : null
    const affinity = state.bow
      ? state.bow.affinity + getters.customAffinityValue
      : null
    const element = state.bow
      ? state.bow.element.value + getters.customElementValue
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
  }
}
