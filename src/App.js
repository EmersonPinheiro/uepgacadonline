import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './routes'

export default props => (
  <HashRouter>
    <div className='wrapper'>
      <Routes />
    </div>
  </HashRouter>
)