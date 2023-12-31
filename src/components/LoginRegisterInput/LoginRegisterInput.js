import './LoginRegisterInput.css';

const LoginRegisterInput = ({ type, name, title, validationAttrs }) => {
    return (
        <div className="loginregisterinput">
            <label className="loginregisterinput__label">{title}</label>
            <input name={name} type={type} {...validationAttrs} className="loginregisterinput__input" />
        </div>

    );
}

export default LoginRegisterInput