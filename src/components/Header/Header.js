import { NavLink, Link } from 'react-router-dom';
import './Header.css'
import imgLogo from '../../images/logo.svg'
import imgAccountButton from '../../images/account-button.svg'

const Header = ({ linkClass, accountClass }) => {

    const linkClassNav = ({ isActive }) => `${linkClass || ""} header__link ${isActive ? "header__link_active" : ""}`;

    return (
        <div className="header">
            <div className='header__container'>
                <img alt="logo" src={imgLogo} />
                <div className="header___container_link">
                    <NavLink to="/movies" className={linkClassNav}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className={linkClassNav}>Сохранённые фильмы</NavLink>
                </div>
                <div className={`header__account_container ${accountClass || ""}`}>
                    <Link to="/profile" className="header__account_link">Аккаунт</Link>
                    <div className="header__container_account_img">
                        <img alt="Аккаунт" className="header__account_img" src={imgAccountButton} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header
