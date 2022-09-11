import React from "react";
import { useGetData } from "../../hooks/useGetData";
import './Header.scss'
import {
    logo,
    facebook,
    twitter,
    linkedin,
    youtube
} from '../../assets/importsImags/importImgs'
import { HeaderNavMenuItem } from "../HeaderNavMenuItem/HeaderNavMenuItem";

export const Header: React.FC = () => {
    const { navigation } = useGetData()
    return (
        <header className="header">
            <div className="container-header border-solid-bottom">
                <div className="header__left">
                    <a href="/" className="logo-link">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav className="header__nav">
                        <ul className="header-nav-menu">
                            {navigation.length ?
                                navigation.map((item, index) => {
                                    return <HeaderNavMenuItem
                                        key={index}
                                        title={item.title}
                                        link={item.link}
                                    />
                                }) : <p>Данных нет</p>
                            }
                        </ul>
                    </nav>
                </div>

                <div className="header__right">
                    <ul className="header-social-networks-list">
                        <li className="header-social-networks-list__item">
                            <img src={facebook} alt="facebook" className="header-social-networks__img" />
                        </li>
                        <li className="header-social-networks-list__item">
                            <img src={twitter} alt="twitter" className="header-social-networks__img" />
                        </li>
                        <li className="header-social-networks-list__item">
                            <img src={linkedin} alt="linkedin" className="header-social-networks__img" />
                        </li>
                        <li className="header-social-networks-list__item">
                            <img src={youtube} alt="youtube" className="header-social-networks__img" />
                        </li>
                    </ul>
                    <button className="header__button-search" type="submit"></button>
                </div>
            </div>
        </header>
    )
}