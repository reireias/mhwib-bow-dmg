import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import target from '@/components/Buff'
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
    const wrapper = shallowMount(target, {
      localVue,
      store,
      vuetify,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
