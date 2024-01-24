import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {

    const moviesData = [
        { _id: 1, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 2, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 3, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: true, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    let movies;
    if (window.innerWidth > 320) {
        movies = moviesData;
    }
    else if (window.innerWidth <= 320) {
        movies = moviesData.slice(0, 2);
    }

    return (
        <section className="savedmovies page-width-common">
            <section className="savedmovies__wrapper">
                    <section className='savedmovies__searchform'>
                        <SearchForm />
                    </section>
                    <section className='savedmovies__cardlist'>
                        <MoviesCardList
                            savedList={true}
                            movies={movies} />
                    </section>
            </section>
        </section>
    );
}

export default SavedMovies
