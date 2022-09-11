import React from "react";
import { Link } from "react-router-dom";
import { INavigation } from "../../interfaces/interface.fetchData";


export const HeaderNavMenuItem: React.FC<INavigation> = ({ title, link }) => {
    return (
        <li className="header-nav-menu__item">
            <Link to={link} className="header-nav-menu__link">{title}</Link>
        </li>
    )
}