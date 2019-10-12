import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import target from '@/pages/index'
import { createStore } from '@/test/helper'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('index', () => {
  let store
  const actions = {
    loadLocal: jest.fn()
  }
  beforeEach(() => {
    store = createStore({}, actions)
  })

  it('should be vue instance', () => {
    const vuetify = new Vuetify()
    const wrapper = shallowMount(target, {
      localVue,
      store,
      vuetify
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    // TODO
    // expect(wrapper.html()).toMatchSnapshot()
  })
})
