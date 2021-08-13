
import { mount } from '@vue/test-utils';
import Emit from "@/components/Emit.vue";

describe('Emit.vue', () => {
  it("test $emit",() => {
    const wrapper = mount(Emit);
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted('incrementCount'))
  })
})