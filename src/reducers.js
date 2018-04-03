
import { combineReducers } from 'redux'

import { reducer as toastrReducer } from 'react-redux-toastr'

import authReducer from './components/auth/authReducer'
import gradeReducer from './components/grade/gradeReducer'

import { routerReducer } from 'react-router-redux'

const registerReducer = combineReducers({
    auth: authReducer,
    grade: gradeReducer,
    toastr: toastrReducer,
    router: routerReducer
})

export default registerReducer