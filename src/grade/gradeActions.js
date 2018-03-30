import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

const SCRAP_URL = 'http://localhost:5000/scrap/grade'

export const getGrade = () => {
    return dispatch => {
        axios.get(SCRAP_URL)
        .then(resp => {
            dispatch({ type: 'GRADE_FETCHED', payload: resp.data })
        })
    }
}
