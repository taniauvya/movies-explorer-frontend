import React from 'react'
import './Movies.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
    return (
        <div className="movies">
            <Header />
            <div className="movies__container">
                <MoviesCardList />
            </div>
            <Footer />
        </div>
    )
};

export default Movies