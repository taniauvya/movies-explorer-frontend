export function durationToString(durationMinutes) {
    const hours = Math.floor(durationMinutes / 60);
    const minutes = Math.floor(durationMinutes % 60);

    const hoursString = hours > 0 ? `${hours}ч` : "";
    const minutesString = minutes > 0 ? `${minutes}м` : "";

    return `${hoursString} ${minutesString}`;
}

function moviesPerRow(windowWidth) {
    let res;
    if (windowWidth > 1220) {
        res = 4;
    } else if (windowWidth <= 1220 && windowWidth > 950) {
        res = 3;
    } else if (windowWidth <= 950 && windowWidth > 750) {
        res = 2;
    } else {
        res = 1;
    }

    return res;
}

function movieRows(windowWidth) {
    let res;
    if (windowWidth >= 480) {
        res = 4;
    } else {
        res = 5;
    }

    return res;
}

export function getMoviesDisplayParams() {
    const windowWidth = window.innerWidth;
    return {
        rows: movieRows(windowWidth),
        perRow: moviesPerRow(windowWidth)
    }
}

export function numLoadRow() {
    const windowWidth = window.innerWidth;
    return windowWidth <= 480 ? 2 : 1;
}

function isShortMovie(movie) {
    return movie.duration < 40;
}

function includesIns(str, search) {
    return str.toLowerCase().includes(search.toLowerCase());
}

export function filterMovies(movies, {movieName, isShort}) {
    let moviesRes = movies;
    if (movieName) moviesRes = moviesRes.filter(movie => includesIns(movie.nameRU, movieName) || includesIns(movie.nameEN, movieName));
    if (isShort) moviesRes = moviesRes.filter(isShortMovie);
    return moviesRes;
}