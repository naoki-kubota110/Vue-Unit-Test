import { mount, shallowMount } from '@vue/test-utils';
import User from "@/components/User.vue";

describe("User", () => {
  it("mount", () => {
    const wrapper = mount(User, {
      shallow: true
    })
    console.log(wrapper.html())
    // expect(wrapper.html()).toContain('ユーザ一覧')
  })
  it("shallowMount", () => {
    const wrapper = shallowMount(User)
    console.log(wrapper.html())
  })
})