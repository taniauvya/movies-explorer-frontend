import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Navigation from '../Navigation/Navigation';
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import Logo from '../Logo/Logo'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'

const Header = ({ navigationLinkClass, navigationAccountClass, isBlackLineNavMenu = true, handleNavigationMenuClick }) => {

    const currentUser = React.useContext(CurrentUserContext);

    let linksElem;
    if (currentUser?.name === '') {
        linksElem =
            <div className="header__container-login">
                <div className="header__container-login-links">
                    <Link to="/signup" className="header__link-register link-common">Регистрация</Link>
                    <Link to="/signin" className="header__link-login link-common">Войти</Link>
                </div>
            </div>
    }
    else {
        linksElem =
            <>
                <div className='header__container-nav-large'>
                    <Navigation
                        isOpen={true}
                        linkClass={navigationLinkClass}
                        accountClass={navigationAccountClass} />
                </div>
                <div className='header__container-nav-medium'>
                    <NavigationMenu
                        isBlack={isBlackLineNavMenu}
                        onClick={handleNavigationMenuClick} />
                </div>
            </>
    }

    return (
        <div className="header">
            <div className='header__logo'>
                <Logo />
            </div>
            
            {linksElem}
        </div>
    )
};

export default Header
