import axios from 'axios'
import queryString from 'query-string'

import React, { Component } from 'react'

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            login: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) { this.setState({...this.state, [e.target.name]: eval.target.value}) }

    login() {
        const AUTH_URL = 'http://localhost:5000/scrap/auth'

        const login = "14147326"
        const password = ""

        axios.post(AUTH_URL, queryString.stringify({ login, password }))
            .then(resp => {
                //toastr.success('Sucesso', 'Login realizado com sucesso!.')
                localStorage.setItem('cookie', resp.data.cookie)
                console.log(localStorage.getItem('cookie'))
            })
            .catch((e) => {
                console.log(e)
                //toastr.error('Erro', 'Usuário ou senha inválidos.')
            })   
    }

    render() {
        return (
            <div className="mdl-card mdl-shadow--6dp">
                <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                    <h2 className="mdl-card__title-text">Acadêmico Online</h2>
                </div>
                <form type="submit">
                    <div className="mdl-card__supporting-text">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input"
                                type="text"
                                name="login"
                                onChange={this.onChangeLogin} />
                            <label className="mdl-textfield__label"
                                htmlFor="username">RA</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input"
                                type="password"
                                name="password"
                                onChange={this.onChangePassword} />
                            <label className="mdl-textfield__label"
                                htmlFor="userpass">Senha</label>
                        </div>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button type="button"
                            onClick={() => {this.login()}}
                            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
