const axios = require('axios')
const cheerio = require('cheerio')
const queryString = require('query-string')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

SCRAP_URLS = {
    'session': 'https://sistemas.uepg.br/academicoonline/login/index',
    'auth': 'https://sistemas.uepg.br/academicoonline/login/authenticate',
    'home': 'https://sistemas.uepg.br/academicoonline',
    'grade': 'https://sistemas.uepg.br/academicoonline/avaliacaoDesempenho/index',
    'document': 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName='
}

const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));

server.post('/scrap/auth', (req, res) => {
    let data = { 'login': req.body.login, 'password': req.body.password }

    axios.get(SCRAP_URLS['session'])
    .then((scrap_res) => {
        let headers = { 'cookie': `${scrap_res.headers['set-cookie'][0].split(';')[0]}` }

        axios.post(SCRAP_URLS['auth'], queryString.stringify(data), { headers }).then(() => { 
            axios.get(SCRAP_URLS['home'], { headers })
            .then((resp) => {
                const $ = cheerio.load(resp.data)
                const name = $('#logadoHeader p').text()

                if(name != ' ') {
                    res.send({name, cookie: headers.cookie})
                } else {
                    res.status(500);
                    res.send({'error': 'login or password wrong'})
                }
            })
        })
    })
})

server.post('/scrap/grade', (req, res) => {
    let data = { 'cookie': req.body.cookie }  

    axios.get(SCRAP_URLS['grade'], {
        headers: data
    })
    .then((scrap_resp) => {
        const $ = cheerio.load(scrap_resp.data)
        
        const table = $('table tr.even,.odd').get().map(function (r) {
            return $(r).find('td').get().map(function (c) {
                return $(c).text();
            });
        });

        res.send(table) 
    })
})

server.post('/scrap/document', (req, res) => {
    let data = { 'cookie': req.body.cookie }
    let docName = req.body.docName

    axios.get(SCRAP_URLS['document'] + docName, {
        headers: data
    })
    .then((scrap_resp) => {
        res.send(scrap_resp.data)
    })
})

server.listen(5000)