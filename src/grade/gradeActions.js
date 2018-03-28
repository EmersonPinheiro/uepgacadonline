import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

const SCRAP_URL = 'https://sistemas.uepg.br/academicoonline/avaliacaoDesempenho/index'
const INITIAL_VALUES = {table: [{}]}

export function getGrade() {
    const request = axios.get(SCRAP_URL)
    return {
        type: 'GRADE_FETCHED',
        payload: request
    }
}