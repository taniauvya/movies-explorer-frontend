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
                    <div className='header__container_nav_menu'>
                        <NavigationMenu
                            isBlack={isBlackLineNavMenu}
                            onClick={handleNavigationMenuClick} />
                    </div>
                </div>
            </>
    }

    return (
        <div className="header">
            <Logo />

            {linksElem}
        </div>
    )
};

export default Header
