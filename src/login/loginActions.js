import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const SCRAP_URL = 'https://sistemas.uepg.br/academicoonline/login/authenticate'

export function getHeaders() {

}

export function login(credentials) {
    return dispatch => {
        axios.post(SCRAP_URL, credentials)
            .then(response => {
                dispatch([
                    { type: 'USER_LOGIN', payload: response.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                )
            })
    }
}

export function logout() {
    return { type: 'USER_LOGOUT', payload: false }
}
