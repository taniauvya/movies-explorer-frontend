import { NavLink, Link } from 'react-router-dom';
import './Navigation.css'
import imgAccountButton from '../../images/account-button.svg'

const Navigation = ({ linkClass, accountClass, isOpen, isSidePanel = false, onCloseClick }) => {

    const linkClassNav = ({ isActive }) => `${linkClass || ""} navigation__link ${isActive ? "navigation__link_active" : ""}`;
    const linkNavAttrs = {};
    if (isSidePanel) {
        linkNavAttrs.onClick = onCloseClick;
    }

    return (
        <div className={`navigation ${isOpen ? "" : "navigation_closed"}`}>
            {isSidePanel &&
                <div className='navigation__space_separate' />
            }
            <div className="navigation__container">
                {isSidePanel &&
                    <button aria-label="Закрыть" className='navigation__button_close' onClick={onCloseClick} />
                }

                {!isSidePanel &&
                    <div className='navigation__space' />
                }

                <div className="navigation___container_link">
                    {isSidePanel &&
                        <NavLink {...linkNavAttrs} to="/" className={linkClassNav}>Главная</NavLink>
                    }
                    <NavLink {...linkNavAttrs} to="/movies" className={linkClassNav}>Фильмы</NavLink>
                    <NavLink {...linkNavAttrs} to="/saved-movies" className={linkClassNav}>Сохранённые фильмы</NavLink>
                </div>


                <Link {...linkNavAttrs} to="/profile" className={`navigation__account_container navigation__account_link ${accountClass || ""}`}>
                    Аккаунт
                    <div className="navigation__container_account_img">
                        <img alt="Аккаунт" className="navigation__account_img" src={imgAccountButton} />
                    </div>
                </Link>


                {isSidePanel &&
                    <div className="navigation__space_footer" />
                }
            </div>
        </div>
    )
};

export default Navigation