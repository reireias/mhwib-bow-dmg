import Vuex from 'vuex'

export const createStore = (getters = null) => {
  return new Vuex.Store({
    state: {
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
      skill: {
        weaknessExploit: 3,
        elementAttack: 6
      },
      motions: [],
      monster: null,
      target: null,
      wounded: true
    },
    getters
  })
}
