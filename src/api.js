import axios from "axios";

const api = axios.create({
  baseURL: "https://5c0e8a20e1498a001336489e.mockapi.io/api/"
});

export const getPartners = async () => {
  const partners = (await api.get(`/empresas`)).data;
  localStorage.setItem("partners", JSON.stringify(partners));
};

export const getPartner = async partnerId => {
  const partner = (await api.get(`/empresas/${partnerId}`)).data;
  const partnerDocuments = (await api.get(`/empresas/${partnerId}/documentos`)).data;
  return { ...partner, documents: partnerDocuments};
};

export const getPartnerDocument = async (partnerId, documentId) => {
  return (await api.get(`/empresas/${partnerId}/documentos/${documentId}`)).data;
};
