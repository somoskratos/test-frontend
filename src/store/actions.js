import { getPartners, getPartner, getPartnerDocument } from "../api";
export default {
  getPartners() {
    return getPartners();
  },
  setActualPartner: async ({ commit }, partnerId) => {
    const partner = await getPartner(partnerId);
    commit("SET_ACTUAL_PARTNER", partner);
  },
  setActualDocument: async ({ commit }, { partnerId, documentId }) => {
    const document = await getPartnerDocument(partnerId, documentId);
    commit("SET_ACTUAL_DOCUMENT", document);
  }
};
