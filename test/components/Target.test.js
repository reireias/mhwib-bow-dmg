import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import target from '@/components/Target'
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
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('displayPartName', () => {
  test('no element', () => {
    const methodThis = {}
    const item = { name: '部位名', ammo: 100 }
    expect(target.methods.displayPartName.call(methodThis, item)).toBe(
      '部位名 [弾100]'
    )
  })

  test('element', () => {
    const methodThis = { bow: { element: { type: 'fire' } } }
    const item = { name: '部位名', ammo: 100, fire: 50 }
    expect(target.methods.displayPartName.call(methodThis, item)).toBe(
      '部位名 [弾100, 火50]'
    )
  })
})
