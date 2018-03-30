import queryString from 'query-string'

import { toastr } from 'react-redux-toastr'

const AUTH_URL = {
    'session': 'https://sistemas.uepg.br/academicoonline/login/index',
    'login': 'https://sistemas.uepg.br/academicoonline/login/authenticate'
}

export function login() {
    let data = { 'login': '14147326', 'password': '' }

    fetch(AUTH_URL['session'])
    .then(resp => { 
        console.log(resp)
        //console.log(resp)
        //let headers = { 'cookie': `${resp.headers['set-cookie'][0].split(';')[0]}` }
        //console.log(headers)

        /*
        fetch(AUTH_URL['login']), {
            method: 'post',
            mode: 'no-cors',
            headers: headers,
            body: queryString.stringify(data)
        }
        */
       return false
    })

    return { type: 'USER_LOGON', payload: { cookie: 'JSESSIONID=5C07BB1CE877C9DBC858B74EC9F15414' } }
}

export function logout() {
    return { type: 'USER_LOGOUT', payload: false }
}
