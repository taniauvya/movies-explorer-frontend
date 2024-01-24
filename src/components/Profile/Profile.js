import React from 'react'
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const Profile = ({ onLogout }) => {

    const containerSubmitRef = React.useRef();
    const containerEditRef = React.useRef();
    const inputNameRef = React.useRef();
    const inputEmailRef = React.useRef();

    const currentUser = React.useContext(CurrentUserContext);

    const handleEnableSubmitClick = () => {
        containerEditRef.current.classList.remove('profile__edit_visible');
        containerSubmitRef.current.classList.add('profile__submit_visible');
        inputNameRef.current.disabled = false;
        inputEmailRef.current.disabled = false;
    }

    return (
        <section className="profile page-width-common">
            <section className="profile__wrapper">
                <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
                <form name="profile_edit" id="profile_edit" className="profile__form">
                    <section className="profile__container-inputs">
                        <div className="profile__container-input">
                            <label className="profile__label">Имя</label>
                            <input ref={inputNameRef} className="profile__input" type="text" placeholder='Имя' name="name" defaultValue={currentUser.name} required minLength="2" disabled />
                        </div>
                        <div className="profile__separator-input" />
                        <div className="profile__container-input">
                            <label className="profile__label">E-mail</label>
                            <input ref={inputEmailRef} className="profile__input" type="email" name="email" placeholder='E-mail' defaultValue={currentUser.email} required disabled />
                        </div>
                    </section>
                    <section className="profile__container-buttons">
                        <div ref={containerEditRef} className='profile__edit profile__edit_visible'>
                            <button aria-label="Редактировать" type="button" className="profile__button-edit button-common" onClick={handleEnableSubmitClick}>
                                Редактировать
                            </button>
                            <button aria-label="Выйти" className='profile__button-logout button-common' type="button" onClick={onLogout}>Выйти из аккаунта</button>
                        </div>
                        <div ref={containerSubmitRef} className='profile__submit'>
                            <span className='profile__error-submit' />
                            <button aria-label="Сохранить" className='profile__button-submit button-common' form="profile_edit" type="submit">Сохранить</button>
                        </div>
                    </section>
                </form>
            </section>
        </section>
    )
};

export default Profile
