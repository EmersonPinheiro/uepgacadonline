const axios = require('axios')
const cheerio = require('cheerio')
const queryString = require('query-string')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

SCRAP_URLS = {
    'session': 'https://sistemas.uepg.br/academicoonline/login/index',
    'auth': 'https://sistemas.uepg.br/academicoonline/login/authenticate',
    'home': 'https://sistemas.uepg.br/academicoonline'
}

const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));

server.post('/scrap/auth', (req, res) => {
    data = { 'login': req.body.login, 'password': req.body.password }

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

server.get('/scrap/grade', (req, res) => {
    axios.get(SCRAP_URLS['auth'])
        .then((scrap_res) => { res.send(scrap_res) })
})

server.listen(5000)