import React from "react";
import './Login.css';
import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import ValidatedInput from '../ValidatedInput/ValidatedInput';
import LoginRegisterInput from '../LoginRegisterInput/LoginRegisterInput';
import { useFormWithValidation } from '../../utils/Form';
import { isEmailValid } from '../../utils/Validation';
import { ERR_MESSAGE_500, ERR_MESSAGE_404 } from '../../utils/Constants';


const Login = ({ onLogin }) => {

    const [submitInProgress, setSubmitInProgress] = React.useState(false);
    const [submitErrorMsg, setSubmitErrorMsg] = React.useState('');
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitInProgress(true);
        onLogin(values)
            .then(() => resetForm())
            .catch(err => {
                console.error(err);

                let errorMsg;
                if (err.status === 401) {
                    errorMsg = 'Вы ввели неправильный логин или пароль';
                }
                else if (err.status === 500) {
                    errorMsg = ERR_MESSAGE_500;
                }
                else if (err.status === 404) {
                    errorMsg = ERR_MESSAGE_404;
                }
                else if (err.message) {
                    errorMsg = err.message;
                }
                else {
                    errorMsg = 'При входе пользователя произошла ошибка.';
                }

                setSubmitErrorMsg(errorMsg);
            })
            .finally(() => setSubmitInProgress(false));
    }

    return (
        <section className="login page-width-common">
            <LoginRegisterForm
                title="Рады видеть!"
                submitErrorMsg={submitErrorMsg}
                formName="login"
                buttonText="Войти"
                linkTitle="Ещё не зарегистрированы?"
                linkText="Регистрация"
                linkAddress="/signup"
                onSubmit={handleSubmit}
                isValid={isValid}
                submitInProgress={submitInProgress}
                submitSpaceClass="login__space"
            >

                <ValidatedInput
                    element={LoginRegisterInput}
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    title="E-mail"
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

export default Login