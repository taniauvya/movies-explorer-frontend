import React from "react";
import './Register.css';
import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import ValidatedInput from '../ValidatedInput/ValidatedInput';
import LoginRegisterInput from '../LoginRegisterInput/LoginRegisterInput';
import { useFormWithValidation } from '../../utils/Form';
import { isEmailValid } from '../../utils/Validation';
import { ERR_MESSAGE_500, ERR_MESSAGE_404 } from '../../utils/Constants';


const Register = ({ onRegister }) => {

    const [submitInProgress, setSubmitInProgress] = React.useState(false);
    const [submitErrorMsg, setSubmitErrorMsg] = React.useState('');
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ name: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitInProgress(true);
        onRegister(values)
            .then(() => resetForm())
            .catch(err => {
                let errorMsg;
                if (err.status === 409) {
                    errorMsg = 'Пользователь с таким email уже существует.';
                }
                else if (err.status === 500) {
                    errorMsg = ERR_MESSAGE_500;
                }
                else if (err.status === 404) {
                    errorMsg = ERR_MESSAGE_404;
                }
                else {
                    errorMsg = 'При регистрации пользователя произошла ошибка.';
                }

                setSubmitErrorMsg(errorMsg);
            })
            .finally(() => setSubmitInProgress(false));
    }

    return (
        <section className="register page-width-common">
            <LoginRegisterForm
                title="Добро пожаловать!"
                submitErrorMsg={submitErrorMsg}
                formName="register"
                buttonText="Зарегистрироваться"
                linkTitle="Уже зарегистрированы?"
                linkText="Войти"
                linkAddress="/signin"
                onSubmit={handleSubmit}
                isValid={isValid}
                submitInProgress={submitInProgress}
                submitSpaceClass="register__space"
            >

                <ValidatedInput
                    element={LoginRegisterInput}
                    value={values.name}
                    error={errors.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    title="Имя"
                    placeholder="Имя"
                    validationAttrs={{ required: true, minLength: 2 }}
                    cssClass="loginregisterinput__input_name"
                    disabled={submitInProgress}
                />

                <ValidatedInput
                    element={LoginRegisterInput}
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    title="E-mail"
                    placeholder="E-mail"
                    validationAttrs={{ required: true }}
                    validationFunc={isEmailValid}
                    cssClass="loginregisterinput__input_email"
                    disabled={submitInProgress}
                />

                <ValidatedInput
                    element={LoginRegisterInput}
                    value={values.password}
                    error={errors.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    title="Пароль"
                    placeholder="Пароль"
                    validationAttrs={{ required: true, minLength: 2 }}
                    cssClass="loginregisterinput__input_password"
                    disabled={submitInProgress}
                />

            </LoginRegisterForm>
        </section>
    );
}

export default Register