import React from "react";
import './ProfileInput.css';

const ProfileInput = ({ value, inputRef, onChange, type, name, title, placeholder, validationAttrs, disabled }) => {    
    return (
        <div className="profileinput">
            
            <label className="profileinput__label">
                {title}
            </label>

            <input className="profileinput__input"
                ref={inputRef}
                value={value}
                onChange={onChange}
                disabled={disabled}
                type={type}
                placeholder={placeholder}
                name={name}
                {...validationAttrs}
            />

        </div>
    );
}

export default ProfileInput