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
                required={true}
            />

            <LoginRegisterInput
                type="email"
                name="email"
                title="E-mail"
                required={true}
            />

            <LoginRegisterInput
                type="password"
                name="password"
                title="Пароль"
                required={true}
            />

        </LoginRegisterForm>
    );
}

export default Register