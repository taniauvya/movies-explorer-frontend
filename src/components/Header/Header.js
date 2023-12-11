import React from 'react'
import './Header.css'
import imgLogo from '../../images/logo.svg'
import imgAccountButton from '../../images/account-button.svg'

const Header = () => {
    return (
        <div className="header">
            <img alt="logo" src={imgLogo} />
            <a className="header__link" href="">Фильмы</a>
            <a className="header__link" href="">Сохранённые фильмы</a>
            <div className="header__account_container">
                <a className="header__account_link">Аккаунт</a>
                <img alt="Аккаунт" className="header__account_img" src={imgAccountButton} />
            </div>
        </div>
    )
};

export default Header
