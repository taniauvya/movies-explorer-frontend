import React from 'react';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/Movies';
import { useForm } from '../../utils/Form';

const SavedMovies = ({ movies, onDeleteMovie }) => {

    const { values: searchFormValues, handleChange: searchFormHandleChange } = useForm({ movieName: '', isShort: false });

    const handleSearch = () => Promise.resolve();
    const moviesFiltered = filterMovies(movies, searchFormValues);

    return (
        <section className="savedmovies page-width-common">
            <section className="savedmovies__wrapper">
                <section className='savedmovies__searchform'>
                    <SearchForm
                        onSubmit={handleSearch}
                        values={searchFormValues}
                        onChange={searchFormHandleChange}
                    />
                </section>
                <section className='savedmovies__cardlist'>
                    <MoviesCardList
                        savedList={true}
                        movies={moviesFiltered}
                        onDeleteMovie={onDeleteMovie}
                    />
                </section>
            </section>
        </section>
    );
}

export default SavedMovies
