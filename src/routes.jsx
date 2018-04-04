import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Auth from './components/auth'
import Grade from './components/grade'
import Docs from './components/docs'
import Perfil from './components/perfil'

import Sidebar from './components/sidebar'

export default props => (
    <Router>
        <div>
            <Route exact path="/" component={Auth} />
            <Route path="/grade" component={Grade} />
            <Route path="/docs" component={Docs} />
            <Route path="/sidebar" component={Sidebar} />
            <Route path="/perfil" component={Perfil} />
        </div>
    </Router>
)