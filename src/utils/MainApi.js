import Api from './Api'

class MainApi extends Api {

  constructor({ baseUrl }) {
    super({ baseUrl });
  }

  _getHeaders() {
    const headers = { ...this.headers };
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      headers.authorization = `Bearer ${jwt}`;
    }
    return headers;
  }

  signin({ email, password }) {
    return this._fetch('signin', 'POST', { email, password });
  }

  signup({ name, email, password }) {
    return this._fetch('signup', 'POST', { name, email, password });
  }

  getUserData() {
    return this._fetch('users/me');
  }

  updateUserData(userData) {
    return this._fetch('users/me', 'PATCH', userData);
  }

  getMovies() {
    return this._fetch('movies');
  }

  createMovie(movieData) {
    return this._fetch('movies', 'POST', movieData);
  }

  deleteMovie(movieId) {
    return this._fetch(`movies/${movieId}`, 'DELETE');
  }

  checkToken(jwt) {
    const headers = { authorization: `Bearer ${jwt}` };
    return this._fetch('users/me', 'GET', null, headers);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.moviesdb.nomoredomainsmonster.ru"
});

export { mainApi };