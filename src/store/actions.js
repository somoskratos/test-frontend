import { getPartners } from "../api";
export default {
  getPartners() {
    return getPartners();
  },
  setActualPartner({ commit }, partner) {
    commit("SET_ATUAL_PARTNER", partner);
  },
  setActualDocument({ commit }, document) {
    commit("SET_ATUAL_DOCUMENT", document);
  }
};
