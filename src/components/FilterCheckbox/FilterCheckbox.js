import React from 'react';
import './FilterCheckbox.css'

const FilterCheckbox = ({ name, onChange, value, disabled}) => {
    return (
        <label className="filtercheckbox">
            <input disabled={disabled} className="filtercheckbox__input" type="checkbox" name={name} onChange={onChange} checked={value} />
            <span className="filtercheckbox__span" />
        </label>
    )
};

export default FilterCheckbox
