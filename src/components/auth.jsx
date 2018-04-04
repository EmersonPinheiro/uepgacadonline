import axios from 'axios'
import queryString from 'query-string'

import React, { Component } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'

import AccountCircle from 'material-ui-icons/AccountCircle'
import Key from 'material-ui-icons/VpnKey'

const styles = theme => ({
    card: {
        maxWidth: 500,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    media: {
        height: 0,
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
});

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            login: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) { this.setState({...this.state, [e.target.name]: e.target.value}) }

    login() {
        const AUTH_URL = 'http://localhost:5000/scrap/auth'

        const login = this.state.login
        const password = this.state.password

        axios.post(AUTH_URL, queryString.stringify({ login, password }))
            .then(resp => {
                localStorage.setItem('cookie', resp.data.cookie)
                this.props.history.push('/grade')
            })
            .catch((e) => {
                toast('Ocorreu um erro ao logar!', { 
                    type: toast.TYPE.ERROR,
                    hideProgressBar: true,
                    autoClose: 5000 
                })
            })   
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                    <Grid container className={classes.root}>
                        <Grid item xs={12}>
                            <ToastContainer />
                            <Grid container
                                spacing={16}
                                alignItems="center"
                                justify="center">
                                <Card className={classes.control}>                        
                                    <CardMedia
                                        className={classes.media}
                                        image="https://i.imgur.com/CyqhVcG.png" //temp
                                        title="Uepg Logo"
                                    />
                                    <CardHeader
                                        title="Acadêmico Online"
                                        subheader="Universidade Estadual de Ponta Grossa"
                                    />
                                    <CardContent>
                                        <form noValidate autoComplete="on">
                                            <AccountCircle/>
                                            <TextField
                                                required
                                                name="login"
                                                label="Login"
                                                className={classes.textField}
                                                value={this.state.login}
                                                onChange={this.handleChange}
                                            />
                                            <Key/>
                                            <TextField
                                                required
                                                name="password"
                                                label="Senha"
                                                type="password"
                                                autoComplete="current-password"
                                                className={classes.textField}
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            /> 
                                        </form>
                                    </CardContent>
                                    <CardActions>
                                        <Button className={classes.button}
                                                variant="raised"
                                                color="primary" 
                                                size="large"
                                                onClick={() => { this.login() }}>   
                                            Entrar
                                        </Button>
                                    </CardActions>
                                    <CardContent>
                                        <Typography paragraph>
                                            Versão não oficial.
                                        </Typography>
                                        <Typography paragraph>
                                            Lorem ipsum dolor sit amet.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Auth)
