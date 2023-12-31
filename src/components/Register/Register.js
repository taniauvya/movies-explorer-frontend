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
                validationAttrs = {{ required: true, minlength: 2 }}
            />

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

export default Register