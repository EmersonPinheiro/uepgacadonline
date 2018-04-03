import React from 'react'
import ReactDOM from 'react-dom'

import { connect, Provider } from 'react-redux'

import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import ReduxToastr from 'react-redux-toastr'

import AuthForm from './components/auth/authForm'
import Home from './views/home'
import Documents from './components/documents/documents'
import Grade from './components/grade/grade'

import Navbar from './components/navbar'

import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

const history = createHistory()
const middleware = routerMiddleware(history)

//const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)))
const store = applyMiddleware(thunk, middleware)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path='/' component={AuthForm} />
                    <Route path='/grade'component={Grade} />
                </Switch>
            </div>
        </Router>
    </Provider>
    , document.getElementById('app')
)

registerServiceWorker()
