import _ from 'lodash';

export function getMoviesByGenre(items, genre) {
    console.log("genremovies", items, genre)
    if (genre === "allgenres") {
        return items
    }
    const movies = items.filter(item => item.genre.name === genre)
    return movies
}