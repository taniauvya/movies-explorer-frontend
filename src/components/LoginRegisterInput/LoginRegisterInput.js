import './LoginRegisterInput.css';

const LoginRegisterInput = ({ type, name, title, required }) => {
    return (
        <div className="loginregisterinput">
            <label className="loginregisterinput__label">{title}</label>
            <input name={name} type={type} required={required} className="loginregisterinput__input" />
        </div>

    );
}

export default LoginRegisterInput