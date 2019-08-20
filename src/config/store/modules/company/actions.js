export default {
    maskThis({ commit }, { nomeFantasia, endereco, cidade, estado, pais, cnpj, telefone }) {

        const maskedAddr = endereco + '. ' + cidade + ', '
            + estado + ', ' + pais
        commit('SET_ENDERECO', maskedAddr)

        let maskedCnpj = ''
        maskedCnpj += cnpj.slice(0, 2) + '.'
        maskedCnpj += cnpj.slice(2, 5) + '.'
        maskedCnpj += cnpj.slice(5, 8) + '/'
        maskedCnpj += cnpj.slice(8, 12) + '-'
        maskedCnpj += cnpj.slice(12)
        commit('SET_CNPJ', maskedCnpj)

        let maskedPhone = '('
        maskedPhone += telefone.slice(0, 2) + ')'
        maskedPhone += telefone.slice(2, 6) + '-'
        maskedPhone += telefone.slice(6)
        commit('SET_PHONE', maskedPhone)

        console.log(nomeFantasia.slice(nomeFantasia.length - 4))
        if (nomeFantasia.slice(nomeFantasia.length - 4).toUpperCase() === 'LTDA') {
            commit('SET_TIPO', 'Sociedade Empresarial Limitada')
        } else commit('SET_TIPO', 'Sociedade Empresarial Anônima')
    }
}