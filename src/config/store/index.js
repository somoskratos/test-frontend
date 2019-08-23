import Vue from 'vue'
import Vuex from 'vuex'

import companies from './modules/companies'
import company from './modules/company'

Vue.use(Vuex)

Vuex.createNamespacedHelpers('companies')
Vuex.createNamespacedHelpers('company')

export default new Vuex.Store({
    modules: {
        companies,
        company
    },
})
