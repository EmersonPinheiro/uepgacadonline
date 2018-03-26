import React from 'react'

export default class PartialGrade extends Component {

    render() {
        return (
            <div class="mdl-card__actions mdl-card--border">
                <div id="mdl-table">
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable is-upgraded is-focused">
                        <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
                            <i class="material-icons">search</i>
                        </label>
                        <div class="mdl-textfield__expandable-holder">
                            <input class="mdl-textfield__input search" type="text" id="sample6"/>
                            <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>                                
                        </div>
                        <table id='mdl-table' class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                            <thead>
                                <tr>
                                    <th class="sort" data-sort="nome">Nome</th>
                                    <th class="sort" data-sort="faltas">Faltas</th>
                                    <th class="sort" data-sort="nota01">Nota 01</th>
                                    <th class="sort" data-sort="nota02">Nota 02</th>
                                    <th class="sort" data-sort="notae">Nota E</th>
                                    <th class="sort" data-sort="media">Média</th>
                                    <th class="sort" data-sort="frequencia">Frequência(%)</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr>
                                    <td class="nome">Análise de Circuitos</td>
                                    <td class="faltas">12</td>
                                    <td class="nota01"></td>
                                    <td class="nota02"></td>
                                    <td class="notae"></td>
                                    <td class="media">0</td>
                                    <td class="frequencia">82</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}