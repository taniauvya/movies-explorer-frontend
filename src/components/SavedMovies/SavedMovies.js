import './SavedMovies.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
    return (
        <div className="savedmovies">
            <div className="savedmovies__container">
                <Header />
                <div className='savedmovies__container_searchform'>
                    <SearchForm />
                </div>
                <div className='savedmovies__container_cardlist'>
                    <MoviesCardList />
                </div>
                <div className='savedmovies__container_footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default SavedMovies
