import { shallowMount } from "@vue/test-utils";
import Dashboard from "@/views/Dashboard.vue";

describe("Dashboard.vue", () => {
  it("renders the view", () => {
    const wrapper = shallowMount(Dashboard);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
