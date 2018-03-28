import axios from 'axios'
import { toastr } from 'react-redux-toastr'

export function getHeaders() {

}

export function login(credentials) {
    return dispatch => {
        url = 'https://sistemas.uepg.br/academicoonline/login/authenticate'

        axios.post(url, credentials)
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
