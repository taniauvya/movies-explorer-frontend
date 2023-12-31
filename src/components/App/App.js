import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ScrollToAnchor from '../ScrollToAnchor/ScrollToAnchor';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const App = () => {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const handleNavigationMenuClick = () => {
    setIsNavOpen(true);
  }
  const handleNavigationClose = () => {
    setIsNavOpen(false);
  }

  const emptyUser = { name: '', about: '', email: '' };
  const [currentUser, setCurrentUser] = React.useState(emptyUser);

  function handleLogin(password, email) {
    setLoggedIn(true);
    navigate('/', { replace: true });
  }

  function handleLogout() {
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  React.useEffect(
    () => {
      const userData = { name: 'Виталий', about: 'Текст о себе', email: 'mail@mail.ru' };
      if (loggedIn) {
        setCurrentUser(userData);
      } else {
        setCurrentUser(emptyUser)
      };
    }
  , [loggedIn]
  );

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      <ScrollToAnchor />
      <Navigation
        isOpen={isNavOpen}
        onCloseClick={handleNavigationClose}
        isSidePanel={true} />
      <Routes>
        <Route path="/" element={<Main
          handleNavigationMenuClick={handleNavigationMenuClick} />} />
        <Route path="/movies" element={<Movies
          handleNavigationMenuClick={handleNavigationMenuClick} />} />
        <Route path="/profile" element={<Profile
          handleNavigationMenuClick={handleNavigationMenuClick} onLogout={handleLogout} />} />
        <Route path="/saved-movies" element={<SavedMovies
          handleNavigationMenuClick={handleNavigationMenuClick} />} />
        <Route path="/signin" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </CurrentUserContext.Provider >
);
}

export default App
