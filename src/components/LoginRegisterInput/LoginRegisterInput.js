import './LoginRegisterInput.css';

const LoginRegisterInput = ({ type, name, title }) => {
    return (
        <div className="loginregisterinput">
            <label className="loginregisterinput__label">{title}</label>
            <input name={name} type={type} />
        </div>

    );
}

export default LoginRegisterInput