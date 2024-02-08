import { Link } from 'react-router-dom';
import './MoviesCard.css'
import { durationToString } from '../../utils/Movies'

const MoviesCard = ({ movie, actionImgClass, onClick }) => {
    return (
        <li className="moviescard">
            <Link className="moviescard__img-link" to={movie.trailerLink} target="_blank">
                <img className="moviescard__img" src={movie.image} alt={movie.nameRU} />
            </Link>
            <div className="moviescard__row1">
                <p className="moviescard__title">{movie.nameRU}</p>
                <button onClick={onClick} className={`moviescard__button button-common ${actionImgClass}`} aria-label="Действие" />
            </div>
            <div className="moviescard__line" />
            <p className="moviescard__duration">{durationToString(movie.duration)}</p>
        </li>
    )
};

export default MoviesCard