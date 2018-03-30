import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { auth, changeLogin, changePassword } from './authActions'

class AuthForm extends Component {
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
                                    <input className="mdl-textfield__input" 
                                           type="text" 
                                           value={this.props.login}
                                           onChange={this.props.changeLogin} />
                                    <label className="mdl-textfield__label" 
                                           htmlFor="username">RA</label>
                                </div>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" 
                                           type="password" 
                                           value={this.props.password}
                                           onChange={this.props.changePassword} />
                                    <label className="mdl-textfield__label" 
                                           htmlFor="userpass">Senha</label>
                                </div>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <button type="button" 
                                        onClick={() => { this.props.auth(this.props.login, this.props.password) }} 
                                        className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
                <span>Session: {this.props.cookie}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({ cookie: state.auth.session.cookie, login: state.auth.login, password: state.auth.password })
const mapDispatchToProps = dispatch => bindActionCreators({ auth, changeLogin, changePassword }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)