import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';


function getHeaderExtClasses(route) {
  let cssClasses = {
    background: "",
    accButtonBackround: "",
    linksFontColor: "",
    navMenuBlack: true
  };
  if (route === '/') {
    cssClasses.background = "app__header_color_main";
    cssClasses.accButtonBackround = "navigation_account_color_main";
    cssClasses.linksFontColor = "navigation_link_color_main";
    cssClasses.navMenuBlack = false;
  }
  else {
    cssClasses.background = "app__header_color_basic";
  }

  return cssClasses;
}


const App = () => {

  const navigate = useNavigate();
  const location = useLocation();

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


  const headerExtClasses = getHeaderExtClasses(location.pathname);

  let header;
  if (["/", "/movies", "/saved-movies", "/profile"].includes(location.pathname))
    header =
      <header className={`app__header ${headerExtClasses.background}`}>
        <div className="app__header_wrapper">
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
        <div className="app__footer_wrapper">
          <Footer />
        </div>
      </footer>;

  let appColsClass;
  if (header && footer) {
    appColsClass = "app-all";
  }
  else if (header) {
    appColsClass = "app-header";
  }
  else {
    appColsClass = "app-no-header-footer";
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
            <Route path="/movies" element={<Movies />} />
            <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        {footer || ""}
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App
