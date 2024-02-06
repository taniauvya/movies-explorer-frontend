import Api from './Api'

const API_URL = 'https://api.nomoreparties.co';
const API_URL_MOVIES = `${API_URL}/beatfilm-movies`;

function mapToMovie(movieDataApi) {
  return {
    movieId: movieDataApi.id,
    nameRU: movieDataApi.nameRU,
    nameEN: movieDataApi.nameEN,
    country: movieDataApi.country,
    director: movieDataApi.director,
    duration: movieDataApi.duration,
    description: movieDataApi.description,
    year: movieDataApi.year,
    image: `${API_URL}${movieDataApi.image.url}`,
    trailerLink: movieDataApi.trailerLink,
    thumbnail: `${API_URL}${movieDataApi.image.url}`,
  };
}

class MoviesApi extends Api {

  constructor({ baseUrl }) {
    super({ baseUrl });
  }

  getMovies() {
    return this._fetch("")
      .then(movies => movies.map(mapToMovie));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: API_URL_MOVIES
});

export { moviesApi };