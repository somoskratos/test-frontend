export default {
    maskInfo({ commit }, { nomeFantasia, logo, endereco, cidade, estado, pais, cnpj, telefone, email }) {

        const maskedAddr = endereco + '. ' + cidade + ', '
            + estado + ', ' + pais

        let maskedCnpj = ''
        maskedCnpj += cnpj.slice(0, 2) + '.'
        maskedCnpj += cnpj.slice(2, 5) + '.'
        maskedCnpj += cnpj.slice(5, 8) + '/'
        maskedCnpj += cnpj.slice(8, 12) + '-'
        maskedCnpj += cnpj.slice(12)

        let maskedPhone = '('
        maskedPhone += telefone.slice(0, 2) + ')'
        maskedPhone += telefone.slice(2, 6) + '-'
        maskedPhone += telefone.slice(6)
        
        
        if (nomeFantasia.toUpperCase().includes('LTDA')) {
            commit('SET_TIPO', 'Sociedade Empresarial Limitada')
        } else commit('SET_TIPO', 'Sociedade Empresarial Anônima')
        
        commit('SET_PHONE', maskedPhone)
        commit('SET_CNPJ', maskedCnpj)
        commit('SET_ENDERECO', maskedAddr)
        commit('SET_NOME_FANTASIA', nomeFantasia)
        commit('SET_LOGO', logo)
        commit('SET_EMAIL', email)
    }
}