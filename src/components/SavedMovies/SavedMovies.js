import './SavedMovies.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ handleNavigationMenuClick }) => {

    const movies = [
        { _id: 1, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 2, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 3, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: true, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 4, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    return (
        <div className="savedmovies">
            <div className="savedmovies__container">
                <Header handleNavigationMenuClick={handleNavigationMenuClick} />
                <div className='savedmovies__container_searchform'>
                    <SearchForm />
                </div>
                <div className='savedmovies__container_cardlist'>
                    <MoviesCardList
                        savedList={true}
                        movies={movies} />
                </div>
                <div className='savedmovies__container_footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default SavedMovies
