import React from 'react'
import './FilterCheckbox.css'

const Checkbox = ({ name }) => {
    return (
        <label className="checkbox__label">
            <input className="checkbox__input" type="checkbox" name={name} />
            <span className="checkbox__span" />
        </label>
    )
};

export default Checkbox
