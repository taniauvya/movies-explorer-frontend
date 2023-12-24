import './Movies.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
    return (
        <div className="movies">
            <div className="movies__container">
                <Header />
                <div className='movies__container_searchform'>
                    <SearchForm />
                </div>
                <div className='movies__container_cardlist'>
                    <MoviesCardList />
                </div>
                <div className='movies__container_load'>
                    <button className='movies__button_load'>
                        Ещё
                    </button>
                    <div className='movies__container_preloader'>
                        <Preloader />
                    </div>
                </div>
                <div className='movies__container_footer'>
                    <Footer />
                </div>
            </div>
        </div>
    )
};

export default Movies