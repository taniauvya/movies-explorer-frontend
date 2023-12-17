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
            linkText="Регистрация">

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
        </LoginRegisterForm>
    );
}

export default Login