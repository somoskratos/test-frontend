import Companies from '../../../views/companies/Companies'
import CompaniesList from '../../../views/companies/CompaniesList'
import Company from '../../../views/companies/Company'
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
            props: true
        }
    ]
}