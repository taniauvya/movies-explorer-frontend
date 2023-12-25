import React from 'react'
import './MoviesCard.css'

const MoviesCard = ({ link, title, duration, actionImg }) => {

    return (
        <div className="moviescard">
            <img className="moviescard__img" src={link} alt={title} />
            <div className="moviescard__row1">
                <p className="moviescard__title">{title}</p>
                <img className="moviescard__like" src={actionImg} alt="Действие" />
            </div>
            <div className="moviescard__line" />
            <p className="moviescard__duration">{duration}</p>
        </div>
    )
};

export default MoviesCard