import axios from 'axios'
import queryString from 'query-string'

import React, { Component } from 'react'

export default class Perfil extends Component {

    constructor() {
        super()
        this.state = {
            academic: '',
            completName: '',
            socialName: '',
            gender: '',
            socialGender: '',
            birthDate: '',
        }
    }

    componentDidMount() {
        const PERFIL_URL = 'http://localhost:5000/scrap/perfil'
        const cookie = localStorage.getItem('cookie')

        axios.post(PERFIL_URL, queryString.stringify({ cookie }))
        .then(resp => {
            console.log(resp.data)
            //this.setState({ grade: resp.data })
        })
    }

    render() {
        return (
            <div>
                <h1>Perfil</h1>
           </div>
        )
    }
}