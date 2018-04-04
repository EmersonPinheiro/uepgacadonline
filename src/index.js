import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from "react-router-dom"

import Routes from './routes'

import Sidebar from './components/sidebar'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <div>
        <Router>
            <div>
                <Routes />
            </div>
        </Router>
    </div>        
    , document.getElementById('app')
)

registerServiceWorker()
