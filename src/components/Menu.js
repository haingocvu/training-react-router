import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { } from "lodash";

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    }
]

const CustonLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let className = match ? "active abc" : "";
                return (
                    <li className={`my-li ${className}`}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </nav>
        )
    }

    showMenu(menus) {
        let rs = null;
        if (menus.length) {
            rs = menus.map((menu, index) => {
                return (
                    <CustonLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            })
        }
        return rs;
    }
}

export default Menu;