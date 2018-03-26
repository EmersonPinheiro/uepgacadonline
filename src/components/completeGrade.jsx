import React, { Component } from 'react'

export default class CompleteGrade extends Component {

    render() {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <div id="mdl-table">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable is-upgraded is-focused">
                        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
                            <i className="material-icons">search</i>
                        </label>
                        <div className="mdl-textfield__expandable-holder">
                            <input className="mdl-textfield__input search" type="text" id="sample6"/>
                            <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
                        </div>

                        <table id='mdl-table' className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                            <thead>
                                <tr>
                                    <th className="mdl-data-table__cell--non-numeric sort" data-sort="cod">Código</th>
                                    <th className="sort" data-sort="nome">Nome</th>
                                    <th className="sort" data-sort="turma">Turma</th>
                                    <th className="sort" data-sort="calendario">Calendário</th>
                                    <th className="sort" data-sort="faltas">Faltas</th>
                                    <th className="sort" data-sort="nota01">Nota 01</th>
                                    <th className="sort" data-sort="nota02">Nota 02</th>
                                    <th className="sort" data-sort="notae">Nota E</th>
                                    <th className="sort" data-sort="media">Média</th>
                                    <th className="sort" data-sort="frequencia">Frequência(%)</th>
                                    <th className="sort" data-sort="estado">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric cod">203519</td>
                                    <td className="nome">Análise de Circuitos</td>
                                    <td className="turma">A</td>
                                    <td className="calendario">2018-1</td>
                                    <td className="faltas">12</td>
                                    <td className="nota01"></td>
                                    <td className="nota02"></td>
                                    <td className="notae"></td>
                                    <td className="media">0</td>
                                    <td className="frequencia">82</td>
                                    <td className="estado">R</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}