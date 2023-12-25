import React from 'react'
import './FilterCheckbox.css'

const Checkbox = ({ name, orderClass }) => {

    return (
        <label className={`checkbox__label ${orderClass}`}>
            <input className="checkbox__input" type="checkbox" name={name} />
            <span className="checkbox__span" />
        </label>
    )
};

export default Checkbox
