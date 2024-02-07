import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import ScrollToAnchor from '../ScrollToAnchor/ScrollToAnchor';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Navigation from '../Navigation/Navigation';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { moviesApi } from '../../utils/MoviesApi.js'
import { mainApi } from '../../utils/MainApi.js'
import { useForm } from '../../utils/Form';

function getHeaderExtClasses(route) {
  let cssClasses = {
    background: "",
    accButtonBackround: "",
    linksFontColor: "",
    navMenuBlack: true
  };

  if (route === '/') {
    cssClasses.background = "app__header_color-main";
    cssClasses.accButtonBackround = "navigation__link-account_color";
    cssClasses.linksFontColor = "navigation__link_color";
    cssClasses.navMenuBlack = false;
  }
  else {
    cssClasses.background = "app__header_color-basic";
  }

  return cssClasses;
}


const App = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const emptyUser = { name: '', about: '', email: '' };

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(emptyUser);
  const { values: searchFormValues, setValues: searchFormSetValues, handleChange: searchFormHandleChange } = useForm({ movieName: '', isShort: false });

  const handleNavigationMenuClick = () => {
    setIsNavOpen(true);
  }
  const handleNavigationClose = () => {
    setIsNavOpen(false);
  }

  function resetState() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    setLoggedIn(false);
    setMovies([]);
    searchFormSetValues({ movieName: '', isShort: false });
    setSavedMovies([]);
    setCurrentUser(emptyUser);
  }

  function handleLogin({ password, email }) {
    return mainApi.signin({ password, email })
      .then((data) => {
        if (data.token) {
          return mainApi.checkToken(data.token)
            .then(() => {
              localStorage.setItem('jwt', data.token);
              setLoggedIn(true);
              navigate('/movies', { replace: true });
            })
            .catch(() => Promise.reject({ message: 'При авторизации произошла ошибка. Переданный токен некорректен.' }));
        }
        else {
          return Promise.reject({ message: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.' });
        }
      });
  }

  function handleRegister({ name, email, password }) {
    return mainApi.signup({ name, email, password })
      .then((data) => {
        if (data) {
          return handleLogin({ email, password });
        }
      });
  }

  function handleProfileChange({ name, email }) {
    return mainApi.updateUserData({ name, email })
      .then(userData => setCurrentUser(userData));
  }

  function handleSaveMovie(movieData) {
    return mainApi.createMovie(movieData)
      .then(movieData => setSavedMovies([...savedMovies, movieData]));
  }

  function handleDeleteMovie(movieId) {
    return mainApi.deleteMovie(movieId)
      .then(() => setSavedMovies(savedMovies.filter(movie => movie._id !== movieId)));
  }

  const handleLoginOn = () => {
    const userPromise = mainApi.getUserData();
    const savedMoviesPromise = mainApi.getMovies();

    Promise.all([userPromise, savedMoviesPromise])
      .then(([userData, savedMoviesData]) => {
        setCurrentUser(userData);
        setSavedMovies(savedMoviesData);
      })
      .catch(console.error);
  }

  React.useEffect(
    () => {
      if (loggedIn) {
        handleLoginOn();
      }
    }
    , [loggedIn]
  );

  function handleLogout() {
    resetState();
    navigate('/', { replace: true });
  }

  function handleSearchMovies() {
    return moviesApi.getMovies()
      .then(movies => {
        localStorage.setItem('movies', JSON.stringify({ searchFormValues, movies }));
        setMovies(movies);
      });
  }

  const handleTokenCheck = () => {
    const origLocation = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(origLocation, { replace: true });
          }
        })
        .catch(console.error);
    }
  }

  React.useEffect(
    () => {
      handleTokenCheck();
    }
    , []
  );


  React.useEffect(
    () => {
      const moviesLocal = localStorage.getItem('movies');
      if (moviesLocal) {
        const moviesData = JSON.parse(moviesLocal);
        searchFormSetValues(moviesData.searchFormValues);
        setMovies(moviesData.movies);
      }
    }
    , []
  );



  const headerExtClasses = getHeaderExtClasses(location.pathname);

  let header;
  if (["/", "/movies", "/saved-movies", "/profile"].includes(location.pathname))
    header =
      <header className={`app__header ${headerExtClasses.background}`}>
        <div className="app__wrapper-header">
          <Header
            navigationAccountClass={headerExtClasses.accButtonBackround}
            navigationLinkClass={headerExtClasses.linksFontColor}
            isBlackLineNavMenu={headerExtClasses.navMenuBlack}
            handleNavigationMenuClick={handleNavigationMenuClick} />
        </div>
      </header>;

  let footer;
  if (["/", "/movies", "/saved-movies"].includes(location.pathname))
    footer =
      <footer className='app__footer'>
        <div className="app__wrapper-footer">
          <Footer />
        </div>
      </footer>;

  let appColsClass;
  if (header && footer) {
    appColsClass = "app_all";
  }
  else if (header) {
    appColsClass = "app_header";
  }
  else {
    appColsClass = "app_no-header-footer";
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`app ${appColsClass}`}>
        <ScrollToAnchor />
        <div className='app__navigation'>
          <Navigation
            isOpen={isNavOpen}
            onCloseClick={handleNavigationClose}
            isSidePanel={true} />
        </div>
        {header || ""}

        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  movies={movies}
                  savedMovies={savedMovies}
                  searchFormValues={searchFormValues}
                  searchFormHandleChange={searchFormHandleChange}
                  onSearch={handleSearchMovies}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} movies={savedMovies} onDeleteMovie={handleDeleteMovie} />} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={loggedIn} onProfileChange={handleProfileChange} onLogout={handleLogout} />} />
            <Route path="/signin" element={loggedIn ? <Navigate to="/" replace/> : <Login onLogin={handleLogin} />} />
            <Route path="/signup" element={loggedIn ? <Navigate to="/" replace/> : <Register onRegister={handleRegister} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        {footer || ""}
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App
