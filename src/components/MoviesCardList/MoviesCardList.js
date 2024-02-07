import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies, savedMovies, savedList, onSaveMovie, onDeleteMovie }) => {

    const savedMoviesMap = savedList ? null : new Map(savedMovies.map(movie => [movie.movieId, movie]));

    return (
        <div className="moviescardlist">
            <ul className="moviescardlist__list">
                {movies.map(movie => {

                    let actionImgClass;
                    let actionImg;

                    if (savedList) {
                        actionImgClass = 'moviescard__button_unsave moviescard__button_saved';
                        actionImg = () => onDeleteMovie(movie._id);
                    }
                    else {
                        const savedMovie = savedMoviesMap.get(movie.movieId);

                        if (savedMovie) {
                            actionImgClass = 'moviescard__button_like';
                            actionImg = () => onDeleteMovie(savedMovie._id);
                        }
                        else {
                            actionImgClass = 'moviescard__button_dislike';
                            actionImg = () => onSaveMovie(movie);
                        }
                    }

                    return (
                        <MoviesCard
                            movie={movie}
                            key={movie.movieId}
                            actionImgClass={actionImgClass}
                            onClick={actionImg}
                        />
                    );
                })}

            </ul>
        </div>
    )
};

export default MoviesCardList