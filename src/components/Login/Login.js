import './Login.css';
import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import LoginRegisterInput from '../LoginRegisterInput/LoginRegisterInput';

const Login = () => {
    return (
        <LoginRegisterForm
            title="Рады видеть!"
            formName="login"
            buttonText="Войти"
            linkTitle="Ещё не зарегистрированы?"
            linkText="Регистрация"
            linkAddress="/signup">

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

export default Login