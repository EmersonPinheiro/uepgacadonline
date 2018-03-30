import axios from 'axios'
import queryString from 'query-string'

import { toastr } from 'react-redux-toastr'

const AUTH_URL = 'http://localhost:5000/scrap/auth'

export const auth = (login, password) => {
    console.log(login, password)    
    return dispatch => {
        axios.post(AUTH_URL, queryString.stringify({ login, password }))
        .then(resp => { console.log(resp.data); dispatch({ type: 'USER_LOGON', payload: resp.data }) })
    }
}

export const changeLogin = e => ({
    type: 'LOGIN_CHANGED',
    payload: e.target.value
})

export const changePassword = e => ({
    type: 'PASSWORD_CHANGED',
    payload: e.target.value
})