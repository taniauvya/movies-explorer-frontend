import React from 'react'
import './Profile.css';
import ValidatedInput from '../ValidatedInput/ValidatedInput';
import ProfileInput from '../ProfileInput/ProfileInput';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useFormWithValidation } from '../../utils/Form';
import { isEmailValid } from '../../utils/Validation';

const Profile = ({ onLogout, onProfileChange }) => {

    const currentUser = React.useContext(CurrentUserContext);

    const [submitMsg, setSubmitMsg] = React.useState('');
    const [isSuccess, setIsSuccess] = React.useState(false);
    const { values, setValues, handleChange, errors, isValid } = useFormWithValidation({ email: currentUser.email, name: currentUser.name });
    const [editEnabled, setEditEnabled] = React.useState(false);
    const [submitInProgress, setSubmitInProgress] = React.useState(false);

    React.useEffect(() => {
        setValues({ email: currentUser.email, name: currentUser.name });
    }, [currentUser]);

    const submitEnabled =
        isValid
        && ((values.name !== currentUser.name) || (values.email !== currentUser.email))
        && !submitInProgress;

    const inputsEnabled = editEnabled && !submitInProgress;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitInProgress(true);
        onProfileChange(values)
            .then(() => {
                setIsSuccess(true);
                setEditEnabled(false);
                setSubmitMsg('Данные профиля успешно обновлены');
            })
            .catch(err => {
                let errorMsg;
                if (err.status === 409) {
                    errorMsg = 'Пользователь с таким email уже существует.';
                }
                else {
                    errorMsg = 'При обновлении профиля произошла ошибка.';
                }

                setIsSuccess(false);
                setSubmitMsg(errorMsg);
            })
            .finally(() => setSubmitInProgress(false));
    }

    const handleEnableSubmitClick = () => {
        setEditEnabled(true);
        setSubmitMsg('');
    }

    return (
        <section className="profile page-width-common">
            <section className="profile__wrapper">
                <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
                <form onSubmit={handleSubmit} name="profile_edit" id="profile_edit" className="profile__form" noValidate>
                    <fieldset className="profile__container-inputs">
                        <ValidatedInput
                            element={ProfileInput}
                            value={values.name}
                            error={errors.name}
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            title="Имя"
                            validationAttrs={{ required: true }}
                            disabled={!inputsEnabled}
                        />

                        <div className="profile__separator-input" />

                        <ValidatedInput
                            element={ProfileInput}
                            value={values.email}
                            error={errors.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            title="E-mail"
                            validationAttrs={{ required: true }}
                            validationFunc={isEmailValid}
                            disabled={!inputsEnabled}
                        />
                    </fieldset>

                    <section className="profile__container-buttons">
                        <span className={`profile__result ${submitMsg && "profile__result_visible"} ${isSuccess ? "profile__result_success" : "profile__result_error"}`}>
                            {submitMsg}
                        </span>
                        <div className={`profile__edit ${!editEnabled && "profile__edit_visible"}`}>
                            <button aria-label="Редактировать" type="button" className="profile__button-edit button-common" onClick={handleEnableSubmitClick}>
                                Редактировать
                            </button>
                            <button aria-label="Выйти" className='profile__button-logout button-common' type="button" onClick={onLogout}>Выйти из аккаунта</button>
                        </div>
                        <div className={`profile__submit ${editEnabled && "profile__submit_visible"}`}>
                            <button disabled={!submitEnabled} aria-label="Сохранить" className={`profile__button-submit ${!submitEnabled && "profile__button-submit_disabled"} button-common`} form="profile_edit" type="submit">Сохранить</button>
                        </div>
                    </section>
                </form>
            </section>
        </section>
    )
};

export default Profile
