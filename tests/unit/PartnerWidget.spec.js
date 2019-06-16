import { shallowMount } from "@vue/test-utils";
import PartnerWidget from "@/components/PartnerWidget.vue";

describe("PartnerWidget.vue", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(PartnerWidget);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
