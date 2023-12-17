import React from 'react'
import './Movies.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
    return (
    <div className="movies">
            <div className="movies__container">
                <Header />
                <SearchForm />
                <MoviesCardList />
                <Footer />
            </div>
        </div>
    )
};

export default Movies