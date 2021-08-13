import { mount } from "@vue/test-utils";
import  vIf from "@/components/vIf.vue"

describe('v-if', () => {
  it("test  v-if",async ()=>{
    const wrapper = mount(vIf);
    const profile = wrapper.get('#profile'); 
    // wrapperのgetメソッドでDOM要素を取得
    // findメソッドも同じように引数に指定した要素のコンテンツを取得
    // getメソッドの場合は要素が存在しない場合にエラー
    console.log(profile.text());
    await wrapper.setData({
      admin: true
    })
    const admin = wrapper.find('#admin');
    expect(admin.exists()).toBe(true)
  })
})
// setDataを利用する場合はasync/await関数

describe('v-show', () => {
  it("test Vif Component v-show",()=>{
    const wrapper = mount(vIf);
    const show = wrapper.get("#show")
    console.log(show.text());
    expect(show.isVisible()).toBe(false)
  })
  it("v-show changeData",async ()=>{
    const wrapper = mount(vIf);
    await wrapper.setData({
      show: true
    })
    const show = wrapper.get("#show")
    expect(show.isVisible()).toBe(true)
  })
})
