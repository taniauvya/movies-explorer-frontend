import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css'
import imgAccountButton from '../../images/account-button.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const Navigation = ({ linkClass, accountClass }) => {

    const currentUser = React.useContext(CurrentUserContext);
    const linkClassNav = ({ isActive }) => `${linkClass || ""} navigation__link ${isActive ? "navigation__link_active" : ""}`;

    let linksElem;
    if (currentUser?.name === '') {
        linksElem =
            <div className="navigation__container_login">
                <Link to="/signup" className="navigation__register_link">Регистрация</Link>
                <Link to="/signin" className="navigation__login_link">Войти</Link>
            </div>
    }
    else {
        linksElem =
            <div className={`navigation__account_container ${accountClass || ""}`}>
                <Link to="/profile" className="navigation__account_link">Аккаунт</Link>
                <div className="navigation__container_account_img">
                    <img alt="Аккаунт" className="navigation__account_img" src={imgAccountButton} />
                </div>
            </div>
    }

    return (
        <div className="navigation">
            <div className='navigation__space'/>
            {(currentUser?.name !== '') &&
                <div className="navigation___container_link">
                    <NavLink to="/movies" className={linkClassNav}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className={linkClassNav}>Сохранённые фильмы</NavLink>
                </div>
            }

            {linksElem}
        </div>
    )
};

export default Navigation
