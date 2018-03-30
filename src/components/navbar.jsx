import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component { 
    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout-icon">
                    <a>
                        <img src=""/>
                    </a>
                </div>
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">
                        Acadêmico Online
                    </span>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                                mdl-textfield--floating-label mdl-textfield--align-right">
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link" href="docs.html">Documentos</a>
                            <a className="mdl-navigation__link" href="grade.html">Notas</a>
                        </nav>
                    </div>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation">
                        <button id="user-dropdown" className="mdl-button mdl-js-button mdl-button--icon">
                            <i className="material-icons">more_vert</i>
                        </button>
                        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="user-dropdown">
                            <a href="login.html">
                                <li className="mdl-menu__item">
                                    Sair
                                </li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({ name: state.auth.name })
export default connect(mapStateToProps)(Navbar)