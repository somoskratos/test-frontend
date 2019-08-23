export default {
    SET_ENDERECO: (state, payload = '') => {
        state.endereco = payload
    },
    SET_CNPJ: (state, payload = '') => {
        state.cnpj = payload
    },
    SET_EMAIL: (state, payload = '') => {
        state.email = payload
    },
    SET_PHONE: (state, payload = '') => {
        state.phone = payload
    },
    SET_TIPO: (state, payload = '') => {
        state.tipo = payload
    },
    SET_NOME_FANTASIA: (state, payload = '') => {
        state.nomeFantasia = payload
    },
    SET_LOGO: (state, payload = '') => {
        state.logo = payload
    }
}