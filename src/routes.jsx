import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Auth from './components/auth'
import Grade from './components/grade'
import Docs from './components/documents'

import Navbar from './components/navbar'

export default props => (
    <Router>
        <div>
            <Navbar />
            <Route path="/auth" component={Auth} />
            <Route path="/grade" component={Grade} />
            <Route path="/docs" component={Docs} />
        </div>
    </Router>
)