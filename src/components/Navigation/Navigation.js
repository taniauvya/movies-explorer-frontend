import { NavLink, Link } from 'react-router-dom';
import './Navigation.css'
import imgAccountButton from '../../images/account-button.svg'

const Navigation = ({ linkClass, accountClass }) => {

    const linkClassNav = ({ isActive }) => `${linkClass || ""} navigation__link ${isActive ? "navigation__link_active" : ""}`;

    return (
        <div className="navigation">
            <div className='navigation__space' />
            <div className="navigation___container_link">
                <NavLink to="/movies" className={linkClassNav}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={linkClassNav}>Сохранённые фильмы</NavLink>
            </div>

            <div className={`navigation__account_container ${accountClass || ""}`}>
                <Link to="/profile" className="navigation__account_link">Аккаунт</Link>
                <div className="navigation__container_account_img">
                    <img alt="Аккаунт" className="navigation__account_img" src={imgAccountButton} />
                </div>
            </div>
        </div>
    )
};

export default Navigation