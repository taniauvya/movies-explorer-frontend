import React from 'react'
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const Profile = ({ username, email }) => {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div className="profile">
            <div className="profile__container">
                <Header />
                <div className="profile__container_content">
                    <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
                    <form className="profile__form">
                        <div className="profile__input_container">
                            <label className="profile__form_label">Имя</label>
                            <input className="profile__form_input" type="text" name="email" value={currentUser.name} />
                        </div>
                        <div className="profile__input_separator"/>
                        <div className="profile__input_container">
                            <label className="profile__form_label">E-mail</label>
                            <input className="profile__form_input" type="email" name="email" value={currentUser.email} />
                        </div>
                        <button aria-label="Редактировать" className="profile__submit" type="submit">
                            Редактировать
                        </button>
                    </form>
                    <Link to="/logout" className='profile__link_logout'>Выйти из аккаунта</Link>
                </div>
            </div>
        </div>
    )
};

export default Profile
