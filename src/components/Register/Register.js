import './Register.css';
import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import LoginRegisterInput from '../LoginRegisterInput/LoginRegisterInput';

const Register = () => {
    return (
        <LoginRegisterForm
            title="Добро пожаловать!"
            formName="register"
            buttonText="Зарегистрироваться"
            linkTitle="Уже зарегистрированы?"
            linkText="Войти"
            linkAddress="/signin">

            <LoginRegisterInput
                type="text"
                name="name"
                title="Имя"
            />

            <LoginRegisterInput
                type="email"
                name="email"
                title="E-mail"
            />

            <LoginRegisterInput
                type="password"
                name="password"
                title="Пароль"
            />

        </LoginRegisterForm>
    );
}

export default Register