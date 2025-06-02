import React from "react";
import { menuItems } from "../../index";

import './header.styles.scss';
import { NavLink } from "react-router-dom";

export default () => {
    const menuItemsToShow = menuItems.filter(mi => mi.isMenuItem);

    return <div className="header">
        <div className="icon-block">
            <span className="icon"></span>
            <span>Booking</span>
        </div>
        <nav className="header-menu">
            {menuItemsToShow.map(({ path, caption}) => (
                <NavLink key={path} className="header-menu-item" to={path}>{caption}</NavLink>
            ))}
        </nav>
    </div>
}