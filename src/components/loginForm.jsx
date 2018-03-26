import React, { Component } from 'react'
import request from 'request'

export default class LoginForm extends Component {
    /*
    getUser() {
        fetch('https://sistemas.uepg.br/academicoonline/login/authenticate', {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'connection': 'keep-alive',
                'upgrade-insecure-requests': "1",
            }
        })
        .then((resp) => {
            console.log(resp)
        })
    }
    */
   getUser() {
        request({
            method: 'post',
            headers : {
                'Access-Control-Allow-Origin': '*'
            },
            url: 'https://sistemas.uepg.br/academicoonline/login/authenticate',
            form: { 'login': '14147326', 'password': '' },
        }, (error, resp, body) => {
            console.log(error)
        })
    }

    render () {
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