import { MOVIES_SHORT_DURATION, MOVIES_DISPLAY_PARAMS } from './Constants';

export function durationToString(durationMinutes) {
    const hours = Math.floor(durationMinutes / 60);
    const minutes = Math.floor(durationMinutes % 60);

    const hoursString = hours > 0 ? `${hours}ч` : "";
    const minutesString = minutes > 0 ? `${minutes}м` : "";

    return `${hoursString} ${minutesString}`;
}

export function getMoviesDisplayParams() {
    const windowWidth = window.innerWidth;
    for (const boundary of MOVIES_DISPLAY_PARAMS) {
        if (windowWidth <= boundary.upper && windowWidth > boundary.lower) {
            return boundary;
        }
    }
}

function isShortMovie(movie) {
    return movie.duration < MOVIES_SHORT_DURATION;
}

function includesIns(str, search) {
    return str.toLowerCase().includes(search.toLowerCase());
}

export function filterMovies(movies, { movieName, isShort }) {
    let moviesRes = movies;
    if (movieName) moviesRes = moviesRes.filter(movie => includesIns(movie.nameRU, movieName) || includesIns(movie.nameEN, movieName));
    if (isShort) moviesRes = moviesRes.filter(isShortMovie);
    return moviesRes;
}