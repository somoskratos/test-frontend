import axios from "axios";

const api = axios.create({
  baseURL: "https://5c0e8a20e1498a001336489e.mockapi.io/api/"
});

export const getPartners = async () => {
  const partners = (await api.get(`/empresas`)).data;
  localStorage.setItem("partners", JSON.stringify(partners));
};

export const getPartner = async partner => {
  return (await api.get(`/empresas/${partner.id}`)).data;
};

export const getPartnerDocuments = async partner => {
  return (await api.get(`/empresas/${partner.id}/documentos`)).data;
};

export const getPartnerDocument = async (partner, document) => {
  return (await api.get(`/empresas/${partner.id}/documentos/${document.id}`)).data;
};
