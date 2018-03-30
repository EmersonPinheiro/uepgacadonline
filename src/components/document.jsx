import React from 'react'

export default props => (
    <li className="mdl-list__item mdl-list__item--two-line">
        <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">{props.icon}</i>
            <span>{props.name}</span>
            <span className="mdl-list__item-sub-title">
                {props.description}
            </span>
        </span>
        <span className="mdl-list__item-secondary-content">
            <a className="mdl-list__item-secondary-action" href="#">
                <i className="material-icons">get_app</i>
            </a>
        </span>
    </li>
)