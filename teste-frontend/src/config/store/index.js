import Vue from 'vue'
import Vuex from 'vuex'

import companies from './modules/companies/companies'

Vue.use(Vuex)

Vuex.createNamespacedHelpers('companies')

export default new Vuex.Store({
    modules: {
        companies: {
            namespaced: true,
            ...companies
        }
    },
})
