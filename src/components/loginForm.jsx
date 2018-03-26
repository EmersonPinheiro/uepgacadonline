import React, { Component } from 'react'

export default class LoginForm extends Component {
    render () {
        return (
            <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
                <main class="mdl-layout__content">
                    <div class="mdl-card mdl-shadow--6dp">
                        <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                            <h2 class="mdl-card__title-text">Acadêmico Online</h2>
                        </div>
                        <form action="acad.html">
                            <div class="mdl-card__supporting-text">
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="text" id="username" />
                                    <label class="mdl-textfield__label" for="username">RA</label>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <input class="mdl-textfield__input" type="password" id="userpass" />
                                    <label class="mdl-textfield__label" for="userpass">Senha</label>
                                </div>
                            </div>
                            <div class="mdl-card__actions mdl-card--border">
                                <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Entrar</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}