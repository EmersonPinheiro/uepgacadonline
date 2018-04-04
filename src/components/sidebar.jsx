import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import {
    withStyles,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "material-ui"

import AccountCircle from 'material-ui-icons/AccountCircle'

const routes = [
    {
        name: 'Home',
        link: '/home'
    }
]

export default class Sidebar extends Component {

    renderLinks() {
        return routes.map(route  => (
            <List>
                <NavLink
                    activeClassName="active"
                    to={route.link}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText
                            primary={route.name}
                            disableTypography={true}
                        />
                    </ListItem>
                </NavLink>
            </List>
        ))
    }

    render() {
        return (
            <div>
                {this.renderLinks()}
            </div>   
        )
    }
}

