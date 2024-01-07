import './FilterCheckbox.css'

const FilterCheckbox = ({ name }) => {

    return (
        <label className="filtercheckbox">
            <input className="filtercheckbox__input" type="checkbox" name={name} />
            <span className="filtercheckbox__span" />
        </label>
    )
};

export default FilterCheckbox
