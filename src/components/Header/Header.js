import { NavLink, Link } from 'react-router-dom';
import './Header.css'
import imgLogo from '../../images/logo.svg'
import imgAccountButton from '../../images/account-button.svg'

const linkClass = ({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`;

const Header = () => {
    return (
        <div className="header">
            <img alt="logo" src={imgLogo} />
            <div className="header___container_link">
                <NavLink to="/movies" className={linkClass}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={linkClass}>Сохранённые фильмы</NavLink>
            </div>
            <div className="header__account_container">
                <Link to="/profile" className="header__account_link">Аккаунт</Link>
                <img alt="Аккаунт" className="header__account_img" src={imgAccountButton} />
            </div>
        </div>
    )
};

export default Header
