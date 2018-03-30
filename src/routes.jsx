import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import AuthForm from './auth/authForm'

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={AuthForm} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)