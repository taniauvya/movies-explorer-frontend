import React from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
    return (
        <div className="searchform">
            <form name="searchform" className="searchform__form">
                <div className="searchform__line-1">
                    <input className="searchform__input-film" type="text" placeholder="Фильм" required />
                    <button aria-label="Найти" className="searchform__button-submit button-common" type="submit">
                        Найти
                    </button>
                </div>
                <div className="searchform__line-2">
                    <FilterCheckbox
                        name="shortCheck"
                        orderClass="filtercheckbox_order" />
                    <label className="searchform__label-filter-short">Короткометражки</label>
                </div>
            </form>
        </div>
    )
};

export default SearchForm
