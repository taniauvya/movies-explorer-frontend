import './LoginRegisterInput.css';

const LoginRegisterInput = ({ type, name, title, placeholder, validationAttrs, cssClass }) => {
    return (
        <div className="loginregisterinput">
            <label className="loginregisterinput__label">{title}</label>
            <input name={name} placeholder={placeholder} type={type} {...validationAttrs} className={`loginregisterinput__input ${cssClass || ""}`} />
        </div>

    );
}

export default LoginRegisterInput