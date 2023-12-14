import React from 'react'
import './MoviesCard.css'
import imgLikeUnchecked from '../../images/like-unchecked.svg'
import imgLikeChecked from '../../images/like-checked.svg'

const MoviesCard = ({ link, title, duration, isLiked }) => {
    return (
        <div className="moviescard">
            <img className="moviescard__img" src={link} alt={title} />
            <div className="moviescard__row1">
                <p className="moviescard__title">{title}</p>
                <img className="moviescard__like" src={isLiked ? imgLikeChecked : imgLikeUnchecked} alt="лайк" />
            </div>
            <div className="moviescard__line" />
            <p className="moviescard__duration">{duration}</p>
        </div>
    )
};

export default MoviesCard