import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = () => {

    const movies = [
        { _id: 1, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 2, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 3, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: true, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 4, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 5, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 6, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 7, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 8, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 9, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 10, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 11, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: true, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 12, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 13, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 14, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 15, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { _id: 16, title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", isLiked: false, link: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    return (
        <section className="movies">
            <section className="movies__wrapper">
                    <section className='movies__searchform'>
                        <SearchForm />
                    </section>
                    <section className='movies__cardlist'>
                        <MoviesCardList
                            savedList={false}
                            movies={movies} />
                    </section>
                    <section className='movies__load'>
                        <button className='movies__button-load button-common' aria-label="Еще">
                            Ещё
                        </button>
                        <div className='movies__preloader'>
                            <Preloader />
                        </div>
                    </section>
            </section>
        </section>
    )
};

export default Movies