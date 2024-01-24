import './Register.css';
import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import LoginRegisterInput from '../LoginRegisterInput/LoginRegisterInput';

const Register = () => {
    return (
        <section class="register page-width-common">
            <LoginRegisterForm
                title="Добро пожаловать!"
                formName="register"
                buttonText="Зарегистрироваться"
                linkTitle="Уже зарегистрированы?"
                linkText="Войти"
                linkAddress="/signin"
                submitSpaceClass="register__space">

                <LoginRegisterInput
                    type="text"
                    name="name"
                    title="Имя"
                    placeholder="Имя"
                    validationAttrs={{ required: true, minlength: 2 }}
                    cssClass="loginregisterinput__input_name"
                />

                <LoginRegisterInput
                    type="email"
                    name="email"
                    title="E-mail"
                    placeholder="E-mail"
                    validationAttrs={{ required: true }}
                    cssClass="loginregisterinput__input_email"
                />

                <LoginRegisterInput
                    type="password"
                    name="password"
                    title="Пароль"
                    placeholder="Пароль"
                    validationAttrs={{ required: true, minlength: 2 }}
                    cssClass="loginregisterinput__input_password"
                />

            </LoginRegisterForm>
        </section>
    );
}

export default Register