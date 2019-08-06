import Vue from 'vue'
import KratosHeader from '@/components/KratosHeader'
import KratosHeaderSnap from `../__snapshots__/KratosHeaderSnap`

describe('KratosHeader.vue', () => {
  it('should render Kratos Logo and Exit button', () => {
    const Constructor = Vue.extend(KratosHeader) 
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.kratosheader').textContent)
      .toEqual(KratosHeaderSnap)
  })
})
