const request = require('request')
const cheerio = require('cheerio')

module.exports = {
    getHeaders(callback) {
        request({
            method: 'GET',
            url: 'https://sistemas.uepg.br/academicoonline/login/index',
        }, (error, resp, body) => {
            headers = {
                'cookie': `${resp.headers['set-cookie'][0].split(';')[0]}; __utma=241181661.1990841241.1518980587.1520085361.1520277780.4; __utmz=241181661.1518980587.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)`,
                'connection': 'keep-alive',
                'upgrade-insecure-requests': "1"
            }
            callback(headers, callback)
        })
    },

    getAuth(headers, callback) {
        request({
            method: 'POST',
            url: 'https://sistemas.uepg.br/academicoonline/login/authenticate',
            form: { 'login': '14147326', 'password': '' },
            headers
        }, (error, resp, body) => {
            callback(headers, callback)
        })
    },

    getGrade(headers, callback) {
        request({
            method: 'GET',
            url: 'https://sistemas.uepg.br/academicoonline/avaliacaoDesempenho/index',
            headers
        }, (error, resp, body) => {
            callback(body)
        })
    },

    parseGrade(body) {
        const $ = cheerio.load(body)

        return $('table')

        let t = []
        $('table').find('td').each((index, element) => {
            let children = $(this).children()
            let itemNum = children.eq(0);

            var r = {
                "Num": itemNum.text().trim()
            };

            t.push(r)
        })

        return t

        //return $('table td').html()
    },

    getDocs(headers, callback) {
        request({
            method: 'GET',
            url: 'https://sistemas.uepg.br/academicoonline/documentos/index',
            headers
        }, (error, resp, body) => {
            callback(body)
        })
    },

    parseDocs(body) {
        const $ = cheerio.load(body)

        let t = []
        $('.fieldcontain').each((index, element) => {
            t.push(element.data)
        })

        return t
    },

    getPerfil(headers, callback) {
        request({
            method: 'GET',
            url: 'https://sistemas.uepg.br/academicoonline/academico_pessoa/edit_validado',
            headers
        }, (error, resp, body) => {
            callback(body)
        })
    },

    parsePerfil(body) {

    },

    getCenso(headers, callback) {
        request({
            method: 'GET',
            url: 'https://sistemas.uepg.br/academicoonline/academico_cor_raca_deficiencia/show/6162',
            headers
        }, (error, resp, body) => {
            callback(body)
        })
    },

    parseCenso(body) {
        return body
    },

    getAtivCompl(headers, callback) {
        request({
            method: 'GET',
            url: 'https://sistemas.uepg.br/academicoonline/atividadeComplementar/index',
            headers
        }, (error, resp, body) => {
            callback(body)
        })
    },

    parseAtivCompl(body) {

    },

    getDownloads(headers, callback) {
        request({
            method: 'GET',
            url: 'https://sistemas.uepg.br/academicoonline/downloads/index',
            headers
        }, (error, resp, body) => {
            callback(body)
        })
    },

    parseDownloads(body) {
        return body
    }
}