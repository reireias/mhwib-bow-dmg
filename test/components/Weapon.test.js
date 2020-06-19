import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import target from '@/components/Weapon'
import { createStore } from '@/test/helper'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('instance', () => {
  let store
  beforeEach(() => {
    const getters = {
      calcuratedWeapon: () => ({ attack: 240, affinity: 0, element: 300 }),
    }
    store = createStore(getters)
  })

  it('should be vue instance', () => {
    const vuetify = new Vuetify()
    const wrapper = shallowMount(target, {
      localVue,
      store,
      vuetify,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
