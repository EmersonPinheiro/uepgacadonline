import React, { Component } from 'react'

export default class Documents extends Component {

    renderItems() {
        let documents = [
            {
                title: 'Aproveitamento de Estudos',
                subtitle: 'Relação de Aproveitamento de Estudos do Acadêmico',
                icon: 'assessment',
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=AproveitamentoEstudos_aluno'
            },
            {
                title: 'Atividades Complementares',
                subtitle: 'Relação das Atividades Complementares somente para alunos que já as protocolaram.',
                icon: 'assignment_turned_in',
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=AtividadesComplementar_prograd'
            },
            {
                title: 'Certidão de Registro',
                subtitle: 'Certidão de Registro do Acadêmico',
                icon: 'card_membership',
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=CertidaoRegistro'
            },
            {
                title: 'Certidão de Matrícula',
                subtitle: 'Certidão de Matrícula do Acadêmico',
                icon: 'card_membership',
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=CertidaoMatricula'
            },
            {
                title: 'Certidão de Provável Concluinte',
                subtitle: 'Certidão de Provável Concluinte - Somente para acadêmicos que estão na última série do curso.',
                icon: 'card_membership',
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=CertidaoProvavelConcluinte'
            },
            {
                title: 'Extrato de Matrícula',
                subtitle: 'Extrato de Matrícula do Acadêmico',
                icon: 'className',
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=ExtratoMatricula'
            },
            {
                title: 'Requerimento de Imposição de Grau',
                subtitle: 'Requerimento de Imposição de Grau - Somente para acadêmicos que estão na última série do curso.',
                icon: 'assignment_turned_in',
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=RequerimentoImposicaoGrau_prograd'
            },
            {
                title: 'Histórico Escolar',
                subtitle: 'Histórico Escolar. Histórico Escolar Histórico Escolar do Acadêmico',
                icon: 'assignment_ind',
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=HistoricoEscolarNovo'
            }
        ]

        return documents.map(document => (
            <li className="mdl-list__item mdl-list__item--two-line">
                <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-avatar">{document.icon}</i>
                    <span>{document.title}</span>
                    <span className="mdl-list__item-sub-title">
                        {document.subtitle}
                    </span>
                </span>
                <span className="mdl-list__item-secondary-content">
                    <a className="mdl-list__item-secondary-action" href={document.url}>
                        <i className="material-icons">get_app</i>
                    </a>
                </span>
            </li>
        ))
    }

    render() {

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
                            {this.renderItems()}
                        </ul>
                    </div>
                    </div>
                </div>
            </main>
        )
    }
}