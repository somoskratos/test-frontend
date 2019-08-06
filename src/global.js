module.exports = {
  companysURL: 'https://5c0e8a20e1498a001336489e.mockapi.io/api/empresas',
  companyURL: function (companyID) {
    return 'https://5c0e8a20e1498a001336489e.mockapi.io/api/empresas/'.concat(`${companyID}`)
  },
  documentsURL: function (companyID) {
    return 'https://5c0e8a20e1498a001336489e.mockapi.io/api/empresas/'.concat(`${companyID}/documentos`)
  },
  documentURL: function (companyID, docID) {
    return 'https://5c0e8a20e1498a001336489e.mockapi.io/api/empresas/'.concat(`${companyID}/documentos/${docID}`)
  }
}
