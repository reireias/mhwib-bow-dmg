import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import bows from '@/constants/bow'
import target from '@/components/BowDetail'
import { createStore } from '@/test/helper'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('instance', () => {
  let store
  beforeEach(() => {
    store = createStore()
  })

  it('should be vue instance', () => {
    const vuetify = new Vuetify()
    const propsData = { bow: bows[0] }
    const wrapper = shallowMount(target, {
      localVue,
      store,
      vuetify,
      propsData,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
