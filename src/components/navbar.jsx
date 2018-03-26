import React from 'react'

export default props => (
    <header class="mdl-layout__header">
        <div class="mdl-layout-icon">
            <a>
                <img src=""/>
            </a>
        </div>
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">
                <a href="acad.html">
                    Acadêmico Online
                </a>
            </span>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                        mdl-textfield--floating-label mdl-textfield--align-right">
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="docs.html">Documentos</a>
                    <a class="mdl-navigation__link" href="grade.html">Notas</a>
                </nav>
            </div>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation">
                <button id="user-dropdown" class="mdl-button mdl-js-button mdl-button--icon">
                    <i class="material-icons">more_vert</i>
                </button>
                <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="user-dropdown">
                    <a href="login.html">
                        <li class="mdl-menu__item">
                            Sair
                        </li>
                    </a>
                </ul>
            </nav>
        </div>
    </header>
)