export default {
    SET_COMPANIES(state, payload) {
        state.companiesList = payload
    },
    SET_CURRENT_COMPANY(state, payload) {
        state.currentCompany = payload
    },
    SET_DOCUMENTS(state, payload) {
        state.documents = payload
    }
}