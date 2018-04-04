import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';  

import AccountCircle from 'material-ui-icons/AccountCircle'

const routes = [
    {
        name: 'Home',
        link: '/home',
        icon: <AccountCircle/>
    },
    {
        name: 'Notas',
        link: '/grade',
        icon: <AccountCircle />
    },
    {
        name: 'Documentos',
        link: '/docs',
        icon: <AccountCircle />
    }
]

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class Sidebar extends Component {

    renderLinks() {
        return routes.map(route  => (
            <NavLink
                activeClassName="active"
                to={route.link}
            >
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary={route.name}/>
                </ListItem>
            </NavLink>
        ))
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <List component="nav">
                    {this.renderLinks()}
                </List>
            </div>   
        )
    }
}

export default withStyles(styles)(Sidebar)

