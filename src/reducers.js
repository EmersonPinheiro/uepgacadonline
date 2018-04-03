
import { combineReducers } from 'redux'

import { reducer as toastrReducer } from 'react-redux-toastr'

import AuthReducer from './components/auth/authReducer'
import GradeReducer from './components/grade/gradeReducer'

const registerReducer = combineReducers({
    auth: AuthReducer,
    grade: GradeReducer,
    toastr: toastrReducer,
})

export default registerReducer