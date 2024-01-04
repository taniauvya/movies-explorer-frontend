import './MoviesCard.css'

const MoviesCard = ({ link, title, duration, actionImgClass }) => {

    return (
        <div className="moviescard">
            <img className="moviescard__img" src={link} alt={title} />
            <div className="moviescard__row1">
                <p className="moviescard__title">{title}</p>
                <button className={`moviescard__button button-common ${actionImgClass}`} aria-label="Действие" />
            </div>
            <div className="moviescard__line" />
            <p className="moviescard__duration">{duration}</p>
        </div>
    )
};

export default MoviesCard