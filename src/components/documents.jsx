import React, { Component } from 'react'
//import Document from './document'

export default class Documents extends Component {
    render () {
        return (
            <main className="mdl-layout__content">
                <div className="page-content">
                    <div className="mdl-card mdl-shadow--2dp">
                        <div className="mdl-card__title">
                            <h2 className="mdl-card__title-text">Documentos</h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                            Clique na imagem para visualizar o documento.
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <ul className="mdl-list">
                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">assessment</i>
                                    <span>Aproveitamento de Estudos</span>
                                    <span className="mdl-list__item-sub-title">
                                        Relação de Aproveitamento de Estudos do Acadêmico
                                            </span>
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                    <a className="mdl-list__item-secondary-action" href="#">
                                        <i className="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">assignment_turned_in</i>
                                    <span>Atividades Complementares</span>
                                    <span className="mdl-list__item-sub-title">
                                        Relação das Atividades Complementares somente para alunos que já as protocolaram.
                                            </span>
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                    <a className="mdl-list__item-secondary-action" href="#">
                                        <i className="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">card_membership</i>
                                    <span>Certidão de Registro</span>
                                    <span className="mdl-list__item-sub-title">
                                        Certidão de Registro do Acadêmico
                                            </span>
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                    <a className="mdl-list__item-secondary-action" href="#">
                                        <i className="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">card_membership</i>
                                    <span>Certidão de Matrícula</span>
                                    <span className="mdl-list__item-sub-title">
                                        Certidão de Matrícula do Acadêmico
                                            </span>
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                    <a className="mdl-list__item-secondary-action" href="#">
                                        <i className="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">card_membership</i>
                                    <span>Certidão de Provável Concluinte</span>
                                    <span className="mdl-list__item-sub-title">
                                        Certidão de Provável Concluinte - Somente para acadêmicos que estão na última série do curso.
                                            </span>
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                    <a className="mdl-list__item-secondary-action" href="#">
                                        <i className="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">className</i>
                                    <span>Extrato de Matrícula</span>
                                    <span className="mdl-list__item-sub-title">
                                        Extrato de Matrícula do Acadêmico
                                            </span>
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                    <a className="mdl-list__item-secondary-action" href="#">
                                        <i className="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">assignment_turned_in</i>
                                    <span>Requerimento de Imposição de Grau</span>
                                    <span className="mdl-list__item-sub-title">
                                        Requerimento de Imposição de Grau - Somente para acadêmicos que estão na última série do curso.
                                            </span>
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                    <a className="mdl-list__item-secondary-action" href="#">
                                        <i className="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">assignment_ind</i>
                                    <span>Histórico Escolar</span>
                                    <span className="mdl-list__item-sub-title">
                                        Histórico Escolar. Histórico Escolar Histórico Escolar do Acadêmico
                                        <br/>
                                        <b>ATENÇÃO ACADÊMICO EGRESSO(Acadêmico Graduado): Solicitar
                                        o seu Histórico Escolar junto a Seção de Protocolo Geral.</b>
                                    </span>
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                    <a className="mdl-list__item-secondary-action" href="#">
                                        <i className="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </main>
        )
    }
}