import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import LoginForm from './components/loginForm'

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={LoginForm} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)