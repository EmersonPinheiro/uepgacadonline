import axios from 'axios'
import queryString from 'query-string'

import { toastr } from 'react-redux-toastr'

const AUTH_URL = 'http://localhost:5000/scrap/auth'

export const auth = (login, password) => {
    console.log(login, password)    
    return dispatch => {
        axios.post(AUTH_URL, queryString.stringify({ login, password }))
        .then(resp => { 
            dispatch({ type: 'USER_LOGGED_IN', payload: resp.data })
         })
        .catch(() => { type: 'USER_LOGIN_IN_FAILED'})
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