import axios from 'axios'
import api from '../../../../../.env'

export default {
    state: {
        companiesList: [],
        currentCompany: {},
        documents: []
    },
    mutations: {
        SET_COMPANIES(state, payload) {
            state.companiesList = payload
        },
        SET_CURRENT_COMPANY(state, payload) {
            state.currentCompany = payload
        },
        SET_DOCUMENTS(state, payload) {
            state.documents = payload
        }
    },
    actions: {
        async fetchCompanies({ commit }) {
            let finalList = []
            await axios.get(api.uri).then(response => {
                let list = response.data
                //Coloca (tamanho / 3) vetores de 3 empresas no vetor final
                let j = 0
                for (let i = 0; i <= list.length - 3; i += 3) {
                    finalList[j] = []
                    finalList[j].push(list[i])
                    finalList[j].push(list[i + 1])
                    finalList[j].push(list[i + 2])
                    j++
                }
            })
            commit('SET_COMPANIES', finalList)
        },
        async fetchDocuments({ commit }, id) {
            let documents = []
            await axios.get(`${api.uri}/${id}/documentos`).then(resp => {
                documents = resp.data
            })
            commit('SET_DOCUMENTS', documents)
        },
        async selectCompany({ commit }, id) {
            let company = {}
            await axios.get(`${api.uri}/${id}`).then(resp => {
                company = resp.data
            })
            commit('SET_CURRENT_COMPANY', company)
        }
    },
    getters: {
        getCompaniesList(state) {
            return state.companiesList
        },
        getCurrentCompany(state) {
            return state.currentCompany
        },
        getDocuments(state) {
            return state.documents
        }

    }
}