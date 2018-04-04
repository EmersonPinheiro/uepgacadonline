import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

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
            <List component="nav">
                {this.renderLinks()}
            </List>
        )
    }
}

export default Sidebar

