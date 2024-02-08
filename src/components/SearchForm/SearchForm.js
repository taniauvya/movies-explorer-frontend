import React from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ values, onSubmit, onChange }) => {

    const [submitInProgress, setSubmitInProgress] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitInProgress(true);
        onSubmit(values)
            .finally(() => setSubmitInProgress(false));
    }

    return (
        <div className="searchform">
            <form name="searchform" className="searchform__form" onSubmit={handleSubmit}>
                <div className="searchform__line-1">
                    <input disabled={submitInProgress} name='movieName' className="searchform__input-film" type="text" placeholder="Фильм" value={values.movieName} onChange={onChange} />
                    <button disabled={submitInProgress} aria-label="Найти" type="submit"
                    className={`searchform__button-submit button-common ${submitInProgress && "searchform__button-submit_disabled"}`}>
                        Найти
                    </button>
                </div>
                <div className="searchform__line-2">
                    <FilterCheckbox
                        name="isShort"
                        onChange={onChange}
                        value={values.isShort}
                        disabled={submitInProgress}
                    />
                    <label className="searchform__label-filter-short">Короткометражки</label>
                </div>
            </form>
        </div>
    )
};

export default SearchForm