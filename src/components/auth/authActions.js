import axios from 'axios'
import queryString from 'query-string'

import { toastr } from 'react-redux-toastr'
import { push } from 'react-router-redux';

const AUTH_URL = 'http://localhost:5000/scrap/auth'

export const auth = (login, password) => {
    return dispatch => {
        axios.post(AUTH_URL, queryString.stringify({ login, password }))
        .then(resp => { 
            toastr.success('Sucesso', 'Login realizado com sucesso!.')
            localStorage.setItem('cookie', resp.data.cookie)
            console.log(localStorage.getItem('cookie'))
            //dispatch({ type: 'USER_LOGGED_IN', payload: resp.data })
            dispatch(push("/grade"))
         })
        .catch((e) => {
            console.log(e)
            toastr.error('Erro', 'Usuário ou senha inválidos.')
            dispatch({ type: 'USER_LOGIN_FAILED'})
        })   
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