import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { login } from './loginActions'

export default class LoginForm extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
                <main className="mdl-layout__content">
                    <div className="mdl-card mdl-shadow--6dp">
                        <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                            <h2 className="mdl-card__title-text">Acadêmico Online</h2>
                        </div>
                        <form type="submit">
                            <div className="mdl-card__supporting-text">
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="text" id="username" />
                                    <label className="mdl-textfield__label" htmlFor="username">RA</label>
                                </div>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="password" id="userpass" />
                                    <label className="mdl-textfield__label" htmlFor="userpass">Senha</label>
                                </div>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <button type="button" onClick={this.getUser} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Entrar</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}