import { defaultState } from '@/constants/default'

const KEY = 'state'

export const state = () => ({
  bow: defaultState.bow,
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
  motions: defaultState.motions,
  monster: defaultState.monster,
  target: defaultState.target,
  anger: true,
  wounded: true
})

const saveLocal = (state) => {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export const mutations = {
  loadLocal() {
    const loaded = JSON.parse(localStorage.getItem(KEY))
    this.replaceState(loaded)
  },
  setBow(state, bow) {
    state.bow = bow
    saveLocal(state)
  },
  setCustomAttack(state, attack) {
    state.custom.attack = attack
    saveLocal(state)
  },
  setCustomAffinity(state, affinity) {
    state.custom.affinity = affinity
    saveLocal(state)
  },
  setCustomElement(state, element) {
    state.custom.element = element
    saveLocal(state)
  },
  setParts(state, parts) {
    state.parts = parts
    saveLocal(state)
  },
  setBuff(state, buff) {
    state.buff = Object.assign({}, state.buff, buff)
    saveLocal(state)
  },
  setSkill(state, skill) {
    state.skill = Object.assign({}, state.skill, skill)
    saveLocal(state)
  },
  setMotions(state, motions) {
    state.motions = motions
    saveLocal(state)
  },
  setMonster(state, monster) {
    state.monster = monster
    saveLocal(state)
  },
  setTarget(state, target) {
    state.target = target
    saveLocal(state)
  },
  setAnger(state, anger) {
    state.anger = anger
    saveLocal(state)
  },
  setWounded(state, wounded) {
    state.wounded = wounded
    saveLocal(state)
  }
}

export const actions = {
  loadLocal({ commit }, payload) {
    commit('loadLocal', payload)
  },
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
  weapon(state, getters) {
    const calcuratedWeapon = getters.calcuratedWeapon
    return {
      attack: calcuratedWeapon.rawAttack,
      affinity: calcuratedWeapon.affinity,
      element: calcuratedWeapon.element,
      elementHidden: state.bow.element.hidden,
      sharpness: 'ammo'
    }
  },
  target(state) {
    return {
      physicalEffectiveness: state.target.ammo,
      // TODO: bowにelement必ず入るかチェック
      elementalEffectiveness: state.target[state.bow.element.type],
      anger: state.anger,
      wounded: state.wounded
    }
  },
  buff(state) {
    const buff = {
      powerCharm: state.buff.powerCharm,
      powerTalon: state.buff.powerTalon,
      demonPowder: state.buff.demonPowder
    }
    if (state.buff.seed === 10) {
      buff.mightSeed = true
    } else if (state.buff.seed === 25) {
      buff.mightPill = true
    }
    if (state.buff.demonDrug === 5) {
      buff.demonDrug = true
    } else if (state.buff.demonDrug === 7) {
      buff.megaDemondrug = true
    }
    if (state.buff.canteen) {
      const canteenMap = { 5: 'S', 10: 'M', 15: 'L' }
      buff.canteen = canteenMap[state.buff.canteen]
    }
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
  },
  condition(state, getters) {
    return {
      weapon: getters.weapon,
      target: getters.target,
      buff: getters.buff,
      skill: state.skill
    }
  }
}
