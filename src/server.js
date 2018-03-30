const axios = require('axios')
const queryString = require('query-string')
const express = require('express')
const server = express()

server.get('/scrap/auth', (req, res) => {
    data = { 'login': '14147326', 'password': '' }

    axios.get('https://sistemas.uepg.br/academicoonline/login/index')
        .then((scrap_res) => {
            let headers = { 'cookie': `${scrap_res.headers['set-cookie'][0].split(';')[0]}` }

            axios.post('https://sistemas.uepg.br/academicoonline/login/authenticate', queryString.stringify(data), {
                headers: headers
            })
                .then(() => {
                    res.send(headers)
                })
        })
})

server.get('/scrap/', (req, res) => {
    data = { 'login': '14147326', 'password': '' }

    axios.get('https://sistemas.uepg.br/academicoonline/login/index')
        .then((scrap_res) => {
            let headers = { 'cookie': `${scrap_res.headers['set-cookie'][0].split(';')[0]}` }

            axios.post('https://sistemas.uepg.br/academicoonline/login/authenticate', queryString.stringify(data), {
                headers: headers
            })
                .then(() => {
                    res.send(headers)
                })
        })
})

server.listen(5000)