import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'
import imgLogo from '../../images/logo.svg'
import imgAccountButton from '../../images/account-button.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const Header = ({ linkClass, accountClass }) => {

    const currentUser = React.useContext(CurrentUserContext);
    const linkClassNav = ({ isActive }) => `${linkClass || ""} header__link ${isActive ? "header__link_active" : ""}`;

    let linksElem;
    if (currentUser?.name === '') {
        linksElem =
            <div className="header__container_login">
                <Link to="/signup" className="header__register_link">Регистрация</Link>
                <Link to="/signin" className="header__login_link">Войти</Link>
            </div>
    }
    else {
        linksElem =
            <div className={`header__account_container ${accountClass || ""}`}>
                <Link to="/profile" className="header__account_link">Аккаунт</Link>
                <div className="header__container_account_img">
                    <img alt="Аккаунт" className="header__account_img" src={imgAccountButton} />
                </div>
            </div>
    }

    return (
        <div className="header">
            <div className='header__container'>
                <img alt="logo" src={imgLogo} />
                {(currentUser?.name !== '') &&
                    <div className="header___container_link">
                        <NavLink to="/movies" className={linkClassNav}>Фильмы</NavLink>
                        <NavLink to="/saved-movies" className={linkClassNav}>Сохранённые фильмы</NavLink>
                    </div>
                }

                {linksElem}

            </div>
        </div>
    )
};

export default Header
