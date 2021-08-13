import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Test from "@/components/Test.vue"

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
    console.log(wrapper.props())

  });
});
describe('Test.vue', () => {
  test("test props data",() =>{
    const msg = "World";
    const wrapper = mount(Test,{
      propsData: { msg }
    });
    expect(wrapper.text()).toContain('Hello World')
    console.log(wrapper.props())
  })
  test("test computed", () => {
    const wrapper = mount(Test);
    expect(wrapper.text()).toContain('JOHN')
  })
})