import axios from 'axios'
import queryString from 'query-string'

import { toastr } from 'react-redux-toastr'

const GRADE_URL = 'http://localhost:5000/scrap/grade'

export const getGrade = (cookie) => {
    return dispatch => {
        axios.post(GRADE_URL, queryString.stringify({ cookie }))
        .then(resp => {
            dispatch({ type: 'GRADE_FETCHED', payload: resp.data })
        })
    }
}
