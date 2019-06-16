import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar.vue", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
