import './Login.css';
import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import LoginRegisterInput from '../LoginRegisterInput/LoginRegisterInput';

const Login = ({onLogin}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <LoginRegisterForm
            title="Рады видеть!"
            formName="login"
            buttonText="Войти"
            linkTitle="Ещё не зарегистрированы?"
            linkText="Регистрация"
            linkAddress="/signup"
            onSubmit={handleSubmit}>

            <LoginRegisterInput
                type="email"
                name="email"
                title="E-mail"
                validationAttrs = {{ required: true }}
            />

            <LoginRegisterInput
                type="password"
                name="password"
                title="Пароль"
                validationAttrs = {{ required: true, minlength: 2 }}
            />

        </LoginRegisterForm>
    );
}

export default Login