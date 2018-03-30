

import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, createStore, combineReducers } from 'redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import { reducer as toastrReducer } from 'react-redux-toastr'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import AuthReducer from './components/auth/authReducer'
import GradeReducer from './components/grade/gradeReducer'

import ReduxToastr from 'react-redux-toastr'

export const history = createHistory()

const middleware = routerMiddleware(history)

export const store = createStore(
    combineReducers({
        auth: AuthReducer,
        grade: GradeReducer,
        router: routerReducer,
        toastr: toastrReducer,
        router: routerReducer
    }),
    applyMiddleware(multi, promise, middleware, thunk)
)

//applyMiddleware(multi, promise, middleware, thunk)(createStore)(reducers)