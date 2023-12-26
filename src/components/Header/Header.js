import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import imgLogo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'

const Header = ({ navigationLinkClass, navigationAccountClass, isBlackLineNavMenu = true, handleNavigationMenuClick }) => {

    const currentUser = React.useContext(CurrentUserContext);

    let linksElem;
    if (currentUser?.name === '') {
        linksElem =
            <div className="header__container_login">
                <div className="header__container_login_links">
                    <Link to="/signup" className="header__register_link">Регистрация</Link>
                    <Link to="/signin" className="header__login_link">Войти</Link>
                </div>
            </div>
    }
    else {
        linksElem =
            <>
                <div className='header__container_nav_large'>
                    <Navigation
                        isOpen={true}
                        linkClass={navigationLinkClass}
                        accountClass={navigationAccountClass} />
                </div>
                <div className='header__container_nav_medium'>
                    <NavigationMenu
                        isBlack={isBlackLineNavMenu}
                        onClick={handleNavigationMenuClick} />
                </div>
            </>
    }

    return (
        <div className="header">
            <img alt="logo" src={imgLogo} className='header__logo' />

            {linksElem}
        </div>
    )
};

export default Header
