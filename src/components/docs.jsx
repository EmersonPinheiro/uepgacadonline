import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemSecondaryAction, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import Assessment from 'material-ui-icons/Assessment'
import CardMembership from 'material-ui-icons/CardMembership'
import FileDownload from 'material-ui-icons/FileDownload'

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class Docs extends Component {

    renderItems() {
        let documents = [
            {
                title: 'Aproveitamento de Estudos',
                subtitle: 'Relação de Aproveitamento de Estudos do Acadêmico',
                icon: <Assessment/>,
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=AproveitamentoEstudos_aluno'
            },
            {
                title: 'Atividades Complementares',
                subtitle: 'Relação das Atividades Complementares somente para alunos que já as protocolaram.',
                icon: <Assessment/>,
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=AtividadesComplementar_prograd'
            },
            {
                title: 'Certidão de Registro',
                subtitle: 'Certidão de Registro do Acadêmico',
                icon: <CardMembership/>,
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=CertidaoRegistro'
            },
            {
                title: 'Certidão de Matrícula',
                subtitle: 'Certidão de Matrícula do Acadêmico',
                icon: <Assessment />,
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=CertidaoMatricula'
            },
            {
                title: 'Certidão de Provável Concluinte',
                subtitle: 'Certidão de Provável Concluinte - Somente para acadêmicos que estão na última série do curso.',
                icon: <Assessment />,
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=CertidaoProvavelConcluinte'
            },
            {
                title: 'Extrato de Matrícula',
                subtitle: 'Extrato de Matrícula do Acadêmico',
                icon: <Assessment />,
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=ExtratoMatricula'
            },
            {
                title: 'Requerimento de Imposição de Grau',
                subtitle: 'Requerimento de Imposição de Grau - Somente para acadêmicos que estão na última série do curso.',
                icon: <Assessment />,
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=RequerimentoImposicaoGrau_prograd'
            },
            {
                title: 'Histórico Escolar',
                subtitle: 'Histórico Escolar. Histórico Escolar Histórico Escolar do Acadêmico',
                icon: <Assessment />,
                url: 'https://sistemas.uepg.br/academicoonline/documentos/generate?reportName=HistoricoEscolarNovo'
            }
        ]

        return documents.map(document => (
            <ListItem>
                <Avatar>
                    <i className="material-icons mdl-list__item-avatar">{document.icon}</i>
                </Avatar>
                <ListItemText primary={document.title}
                              secondary={document.subtitle} />
                
                <ListItemSecondaryAction>
                    <IconButton aria-label="Download">
                        <FileDownload />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))
    }

    render() {

        return (
            <div>
                <Card className={this.props.classes.card}>
                    <CardHeader
                        title="Documentos"
                        subheader="Clique na imagem para visualizar o documento."
                    />
                    
                    <CardContent>
                        <List>
                            {this.renderItems()}
                        </List>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Docs)