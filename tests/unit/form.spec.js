import { mount } from "@vue/test-utils";
import  Form from "@/components/Form.vue"

describe("Form", () => {
  it("receive name from input", () => {
    const wrapper = mount(Form)
    const input = wrapper.get("input")
    input.setValue("naoki")
    wrapper.trigger("submit")
    console.log(wrapper.emitted("submitted"))
    expect(wrapper.emitted('submitted')[0][0]).toEqual({
      name:"naoki"
    })
  })
})