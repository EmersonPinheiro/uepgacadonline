import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { reducer as toastrReducer } from 'react-redux-toastr'
import ReduxToastr from 'react-redux-toastr'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import AuthReducer from './auth/authReducer'

import Auth from './auth/auth'
import Documents from './components/documents'
import Grade from './grade/grade'

import Navbar from './components/navbar'

import registerServiceWorker from './registerServiceWorker'

const reducers = combineReducers({
    auth: AuthReducer,
    router: routerReducer,
    toastr: toastrReducer
})

const history = createHistory()
const store = applyMiddleware(thunk, multi, promise, routerMiddleware(history))(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>   
                <ReduxToastr
                    timeOut={2000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"/>
                <Route exact path='/' component={Auth} />
                <Route path='/documents' component={Documents} />
                <Route path='/grade' component={Grade} />
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('app')
)

registerServiceWorker()
