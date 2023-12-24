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
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const App = () => {

  const [currentUser, setCurrentUser] = React.useState({ name: 'Виталий', about: '', email: 'mail@mail.ru' });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App
