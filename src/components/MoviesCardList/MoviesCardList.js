import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies, savedList }) => {

    return (
        <div className="moviescardlist">
            <ul className="moviescardlist__list">
                {movies.map(movie => {

                    const actionImgClass = savedList ? 'moviescard__button_unsave' :
                        (movie.isLiked ? 'moviescard__button_like' : 'moviescard__button_dislike');

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



