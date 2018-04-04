import axios from 'axios'
import queryString from 'query-string'

import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import Table, {
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class Grade extends Component {

    constructor() {
        super()
        this.state = { 
            grade: [] 
        }
    }

    componentDidMount() {
        const GRADE_URL = 'http://localhost:5000/scrap/grade'
        const cookie = localStorage.getItem('cookie')

        axios.post(GRADE_URL, queryString.stringify({ cookie }))
            .then(resp => {
                this.setState({ grade: resp.data })
            })
    }

    renderItems() {
        return this.state.grade.map(item => (
            <TableRow key={item[0]}>
                <TableCell>{item[1]}</TableCell>
                <TableCell numeric>{item[4]}</TableCell>
                <TableCell numeric>{item[5]}</TableCell>
                <TableCell numeric>{item[6]}</TableCell>
                <TableCell numeric>{item[7]}</TableCell>
                <TableCell numeric>{item[8]}</TableCell>
                <TableCell numeric>{item[9]}</TableCell>
            </TableRow>
        ))
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell numeric>Faltas</TableCell>
                            <TableCell numeric>Nota 01</TableCell>
                            <TableCell numeric>Nota 02</TableCell>
                            <TableCell numeric>Nota E</TableCell>
                            <TableCell numeric>Media</TableCell>
                            <TableCell numeric>Freq (%)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderItems()}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default withStyles(styles)(Grade);