import React from 'react'
import ReactDOM from 'react-dom'

import { connect, Provider } from 'react-redux'

import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import ReduxToastr from 'react-redux-toastr'

import Auth from './views/auth'
import Home from './views/home'
import Documents from './components/documents/documents'
import Grade from './components/grade/grade'

import Navbar from './components/navbar'

import registerServiceWorker from './registerServiceWorker'

import { store, history } from './store'

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
                    transitionOut="fadeOut" />
                <Switch>
                    <Route exact path='/' component={Auth} />
                    <Route path='/home'component={Home} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('app')
)

registerServiceWorker()
