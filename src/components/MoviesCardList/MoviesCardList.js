import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import imgLikeUnchecked from '../../images/like-unchecked.svg'
import imgLikeChecked from '../../images/like-checked.svg'
import imgRemoveSaved from '../../images/remove-saved.svg'

const MoviesCardList = ({ movies, savedList }) => {

    return (
        <div className="moviescardlist">
            <ul className="moviescardlist__list">
                {movies.map(movie => {

                    const actionImg = savedList ? imgRemoveSaved :
                        (movie.isLiked ? imgLikeChecked : imgLikeUnchecked);

                    return (
                        <MoviesCard
                            link={movie.link}
                            title={movie.title}
                            duration={movie.duration}
                            key={movie._id}
                            actionImg={actionImg} />
                    );
                })}

            </ul>
        </div>
    )
};

export default MoviesCardList



