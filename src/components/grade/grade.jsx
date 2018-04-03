import React, { Component, logErrorToMyService } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { getGrade } from './gradeActions'

class Grade extends Component {

    componentWillMount() {
        const cookie = localStorage.getItem('cookie')
        this.props.getGrade(cookie)
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        logErrorToMyService(error, info);
    }

    renderItems() { 
        console.log(this.props.grade)
        return this.props.grade.map(item => (
            <tr>
                <td className="nome">{item[1]}</td>
                <td className="faltas">{item[4]}</td>
                <td className="nota01">{item[5]}</td>
                <td className="nota02">{item[6]}</td>
                <td className="notae">{item[7]}</td>
                <td className="media">{item[8]}</td>
                <td className="frequencia">{item[9]}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <div id="mdl-table">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable is-upgraded is-focused">
                        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
                            <i className="material-icons">search</i>
                        </label>
                        <div className="mdl-textfield__expandable-holder">
                            <input className="mdl-textfield__input search" type="text" id="sample6" />
                            <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
                        </div>
                        <table id='mdl-table' className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                            <thead>
                                <tr>
                                    <th className="sort" data-sort="nome">Nome</th>
                                    <th className="sort" data-sort="faltas">Faltas</th>
                                    <th className="sort" data-sort="nota01">Nota 01</th>
                                    <th className="sort" data-sort="nota02">Nota 02</th>
                                    <th className="sort" data-sort="notae">Nota E</th>
                                    <th className="sort" data-sort="media">Média</th>
                                    <th className="sort" data-sort="frequencia">Frequência(%)</th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                {this.renderItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ cookie: state.auth.cookie, grade: state.grade.grade })
const mapDispatchToProps = dispatch => bindActionCreators({ getGrade }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Grade)