import Vuex from 'vuex'

export const createStore = (getters = null) => {
  return new Vuex.Store({
    state: {
      bow: null,
      custom: { attack: null, affinity: null, element: null },
      parts: null
    },
    getters
  })
}
