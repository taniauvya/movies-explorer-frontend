import React from 'react'
import './Profile.css';
import Header from '../Header/Header';

const Profile = ({ username, email }) => {
    return (
        <div className="profile">
            <div className="profile__container">
                <Header />
                <h1 className="profile__title">{`Привет, ${username}!`}</h1>
                <form className="profile__form">
                    <div className="profile__input_container">
                        <label className="profile__form_label">Имя</label>
                        <input className="profile__form_input" type="text" name="email" value={email} />
                    </div>
                    <div className="profile__input_container">
                        <label className="profile__form_label">E-mail</label>
                        <input className="profile__form_input" type="email" name="email" value={email} />
                    </div>
                    <button aria-label="Редактировать" className="profile__submit" type="submit">
                        Редактировать
                    </button>
                </form>
                <a href="/logout">Выйти из аккаунта</a>
            </div>
        </div>
    )
};

export default Profile
