import Companies from '../../../views/companies/Companies.vue'
import CompaniesList from '../../../views/companies/CompaniesList.vue'
import Company from '../../../views/companies/Company.vue'
export default {
    path: '/companies',
    name: '',
    component: Companies,
    children: [
        {
            path: '',
            name: 'companies',
            component: CompaniesList
        },
        {
            path: '/companies/:id',
            name: 'company',
            component: Company,
        }
    ]
}