const getPartners = () => {
  return JSON.parse(localStorage.getItem("partners"));
};

export default {
  namespaced: true,
  partners: getPartners(),
  actualPartner: {},
  actualDocument: {}
};
