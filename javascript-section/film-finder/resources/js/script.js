const tmdbKey = '';
const tmdbBaseUrl = '';
const playBtn = document.getElementById('playBtn');

const getGenres = () => {

};

const getMovies = () => {
    const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;