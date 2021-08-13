import { mount } from "@vue/test-utils";
import  Click from "@/components/Click.vue"

describe('Cluck.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Click)
  })
  it("click button count up", async () => {
    const wrapper = mount(Click);
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('Count is: 1')
    console.log("hello")
  })
  it("click button count up", async () => {
    const wrapper = mount(Click);
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('Count is: 1')
  })
})