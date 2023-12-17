import React from 'react'
import './SearchForm.css'
import Checkbox from '../Checkbox/Checkbox';

const SearchForm = () => {
    return (
        <div className="searchform">
            <form className="searchform__form">
                <div className="searchform__form_line1">
                    <input className="searchform__film" type="text" value="Фильм" />
                    <button aria-label="Найти" className="searchform__submit" type="submit">
                        Найти
                    </button>
                </div>
                <div className="searchform__form_underline" />
                <div className="searchform__form_line2">
                    <Checkbox name="shortCheck" />
                    <label className="searchform__short_label">Короткометражки</label>
                </div>
            </form>
        </div>
    )
};

export default SearchForm
