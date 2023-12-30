import './FilterCheckbox.css'

const FilterCheckbox = ({ name, orderClass }) => {

    return (
        <label className={`filtercheckbox__label ${orderClass}`}>
            <input className="filtercheckbox__input" type="checkbox" name={name} />
            <span className="filtercheckbox__span" />
        </label>
    )
};

export default FilterCheckbox
