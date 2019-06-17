import { getPartners, getPartner } from "../api";
export default {
  getPartners() {
    return getPartners();
  },
  setActualPartner: async ({ commit }, partnerId) => {
    const partner = await getPartner(partnerId);
    commit("SET_ACTUAL_PARTNER", partner);
  },
  setActualDocument({ commit }, document) {
    commit("SET_ACTUAL_DOCUMENT", document);
  }
};
