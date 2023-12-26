import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const handleNavigationMenuClick = () => {
    setIsNavOpen(true);
  }
  const handleNavigationClose = () => {
    setIsNavOpen(false);
  }
  const [currentUser, setCurrentUser] = React.useState({ name: 'Виталий', about: '', email: 'mail@mail.ru' });

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
            handleNavigationMenuClick={handleNavigationMenuClick} />} />
          <Route path="/saved-movies" element={<SavedMovies
            handleNavigationMenuClick={handleNavigationMenuClick} />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App
