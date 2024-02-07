import React from 'react';
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { getMoviesDisplayParams, numLoadRow, filterMovies } from '../../utils/Movies';
import { RESIZE_DELAY_MS } from '../../utils/Constants';

const Movies = ({
    movies,
    savedMovies,
    searchFormValues,
    searchFormHandleChange,
    onSearch,
    onSaveMovie,
    onDeleteMovie
}) => {

    const [isMoviesSearchActive, setIsMoviesSearchActive] = React.useState(false);
    const [isMoviesSearchError, setIsMoviesSearchError] = React.useState(false);
    const [moviesDisplayParams, setMoviesDisplayParams] = React.useState(getMoviesDisplayParams());
    const [movieRows, setMovieRows] = React.useState(moviesDisplayParams.rowsInit);

    const handleSearch = () => {
        setMovieRows(moviesDisplayParams.rowsInit);
        setIsMoviesSearchActive(true);
        setIsMoviesSearchError(false);
        return onSearch(searchFormValues)
            .catch(() => setIsMoviesSearchError(true))
            .finally(() => setIsMoviesSearchActive(false));
    }

    const handleMoreClick = () => {
        setMovieRows(movieRows + moviesDisplayParams.rowsAdd);
    }

    const handleResize = () => {
        setTimeout(() => {
            const displayParams = getMoviesDisplayParams();
            setMoviesDisplayParams(displayParams);
            setMovieRows(displayParams.rowsInit);
        }
            , RESIZE_DELAY_MS
        );
    }

    React.useEffect(
        () => {
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            }
        }
        , []
    );

    const moviesFiltered = filterMovies(movies, searchFormValues);
    const cntDisplayMovies = Math.max(moviesDisplayParams.rowsInit, movieRows) * moviesDisplayParams.perRow;
    const displayMovies = moviesFiltered.slice(0, cntDisplayMovies);
    const hasMore = (moviesFiltered.length > 0) && (displayMovies.length < moviesFiltered.length);
    const moviesNotFound = displayMovies.length === 0 && movies.length > 0;

    let moviesElem;
    if (isMoviesSearchActive) {
        moviesElem =
            <div className='movies__preloader'>
                <Preloader />
            </div>;
    }
    else if (moviesNotFound) {
        moviesElem =
            <span className='movies__result'>
                Ничего не найдено
            </span>;
    }
    else if (!isMoviesSearchError) {
        moviesElem =
            <section className='movies__cardlist'>
                <MoviesCardList
                    savedList={false}
                    movies={displayMovies}
                    savedMovies={savedMovies}
                    onSaveMovie={onSaveMovie}
                    onDeleteMovie={onDeleteMovie}
                />
            </section>;
    }
    else {
        moviesElem =
            <span className='movies__result movies__result_error'>
                Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
            </span>;
    }

    return (
        <section className="movies page-width-common">
            <section className="movies__wrapper">
                <section className='movies__searchform'>
                    <SearchForm
                        onSubmit={handleSearch}
                        values={searchFormValues}
                        onChange={searchFormHandleChange}
                    />
                </section>

                {moviesElem}

                {hasMore &&
                    <section className='movies__load'>
                        <button className='movies__button-load button-common' aria-label="Еще" onClick={handleMoreClick}>
                            Ещё
                        </button>
                    </section>
                }
            </section>
        </section>
    )
};

export default Movies