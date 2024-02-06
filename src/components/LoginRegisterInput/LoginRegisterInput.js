import React from "react";
import './LoginRegisterInput.css';

const LoginRegisterInput = ({ value, inputRef, error, onChange, type, name, title, placeholder, validationAttrs, cssClass, disabled }) => {
    return (
        <div className="loginregisterinput">
            <label className="loginregisterinput__label">{title}</label>
            <input name={name} ref={inputRef} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder} type={type} {...validationAttrs} className={`loginregisterinput__input ${cssClass || ""}`} />
            <span className={`loginregister__error ${error && "loginregister__error_visible"}`}>
                {error}
            </span>
        </div>
    );
}

export default LoginRegisterInput