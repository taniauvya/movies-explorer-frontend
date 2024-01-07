import './Login.css';
import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import LoginRegisterInput from '../LoginRegisterInput/LoginRegisterInput';

const Login = ({ onLogin }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <section class="login page-width-common">
            <LoginRegisterForm
                title="Рады видеть!"
                formName="login"
                buttonText="Войти"
                linkTitle="Ещё не зарегистрированы?"
                linkText="Регистрация"
                linkAddress="/signup"
                onSubmit={handleSubmit}
                submitSpaceClass="login__space">

                <LoginRegisterInput
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    title="E-mail"
                    validationAttrs={{ required: true }}
                />

                <LoginRegisterInput
                    type="password"
                    name="password"
                    title="Пароль"
                    placeholder="Пароль"
                    validationAttrs={{ required: true, minlength: 2 }}
                />

            </LoginRegisterForm>
        </section>
    );
}

export default Login