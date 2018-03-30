import React from 'react'
import AuthForm from '../components/auth/authForm'
import AuthStyle from '../components/auth/auth.css'

export default props => (
    <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
        <main className="mdl-layout__content">
            <AuthForm />
        </main>
    </div>
)