import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies, savedList }) => {

    return (
        <div className="moviescardlist">
            <ul className="moviescardlist__list">
                {movies.map(movie => {

                    const actionImgClass = savedList ? 'movies__button-unsave' :
                        (movie.isLiked ? 'movies__button-like' : 'movies__button-dislike');

                    return (
                        <MoviesCard
                            link={movie.link}
                            title={movie.title}
                            duration={movie.duration}
                            key={movie._id}
                            actionImgClass={actionImgClass}
                            isSaved={savedList} />
                    );
                })}

            </ul>
        </div>
    )
};

export default MoviesCardList



