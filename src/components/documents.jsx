import React, { Component } from 'react'

export default class Documents extends Component {
    render () {
        return (
            <main class="mdl-layout__content">
                <div class="page-content">
                    <div class="mdl-card mdl-shadow--2dp">
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Documentos</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            Clique na imagem para visualizar o documento.
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <ul class="mdl-list">
                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-avatar">assessment</i>
                                    <span>Aproveitamento de Estudos</span>
                                    <span class="mdl-list__item-sub-title">
                                        Relação de Aproveitamento de Estudos do Acadêmico
                                            </span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" href="#">
                                        <i class="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-avatar">assignment_turned_in</i>
                                    <span>Atividades Complementares</span>
                                    <span class="mdl-list__item-sub-title">
                                        Relação das Atividades Complementares somente para alunos que já as protocolaram.
                                            </span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" href="#">
                                        <i class="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-avatar">card_membership</i>
                                    <span>Certidão de Registro</span>
                                    <span class="mdl-list__item-sub-title">
                                        Certidão de Registro do Acadêmico
                                            </span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" href="#">
                                        <i class="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-avatar">card_membership</i>
                                    <span>Certidão de Matrícula</span>
                                    <span class="mdl-list__item-sub-title">
                                        Certidão de Matrícula do Acadêmico
                                            </span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" href="#">
                                        <i class="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-avatar">card_membership</i>
                                    <span>Certidão de Provável Concluinte</span>
                                    <span class="mdl-list__item-sub-title">
                                        Certidão de Provável Concluinte - Somente para acadêmicos que estão na última série do curso.
                                            </span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" href="#">
                                        <i class="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-avatar">class</i>
                                    <span>Extrato de Matrícula</span>
                                    <span class="mdl-list__item-sub-title">
                                        Extrato de Matrícula do Acadêmico
                                            </span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" href="#">
                                        <i class="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-avatar">assignment_turned_in</i>
                                    <span>Requerimento de Imposição de Grau</span>
                                    <span class="mdl-list__item-sub-title">
                                        Requerimento de Imposição de Grau - Somente para acadêmicos que estão na última série do curso.
                                            </span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" href="#">
                                        <i class="material-icons">get_app</i>
                                    </a>
                                </span>
                            </li>

                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-avatar">assignment_ind</i>
                                    <span>Histórico Escolar</span>
                                    <span class="mdl-list__item-sub-title">
                                        Histórico Escolar. Histórico Escolar Histórico Escolar do Acadêmico
                                        <br/>
                                        <b>ATENÇÃO ACADÊMICO EGRESSO(Acadêmico Graduado): Solicitar
                                        o seu Histórico Escolar junto a Seção de Protocolo Geral.</b>
                                    </span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" href="#">
                                        <i class="material-icons">get_app</i>
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