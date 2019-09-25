import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import Like from './like';
import Pagination from './pagination';
import GenreGroup from './genreGroup';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/pagination';
import { getMoviesByGenre } from '../utils/getGenres';


class MovieManager extends Component {
    state = {
        movies: getMovies(),
        genres: getGenres(),
        currentGenre: "allgenres",
        pageSize: 4,
        currentPage: 1
    }

    deleteMovieCode(id) {
        deleteMovie(id)
        this.setState({ movies: getMovies() })
    }

    getmoviecode(movie) {
        return <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
                <Like liked={movie.liked} onClick={() => this.handleLike({ movie })} />
            </td>
            <td><button onClick={() => this.deleteMovieCode({ id: movie._id })} className="btn btn-danger btn-sm">Delete</button></td>
        </tr >
    }

    handleLike = movie => {

        const movies = [...this.state.movies]
        console.log(movies)
        console.log(movie.movie)
        const index = movies.indexOf(movie.movie)
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked
        console.log(movies)
        this.setState({ movies })
    }

    getallMovies() {
        const allmovies = this.state.movies.map(movie => this.getmoviecode(movie))
        return allmovies
    }

    getmovies(movies) {
        return movies.map(movie => this.getmoviecode(movie))
    }

    getAllGenres() {
        const allgenres = ["allgenres"]
        for (const [index, genre] of this.state.genres.entries()) {
            allgenres.push(genre.name)
        }
        return allgenres
    }
    handlePageChange = page => {
        console.log(page)
        this.setState({ currentPage: page })
    }

    handleGenreChange = genre => {
        console.log(genre)
        this.setState({ currentGenre: genre, currentPage: 1 })
    }


    render() {
        const { pageSize, currentPage, currentGenre } = this.state
        if (this.state.movies.length === 0)
            return <p ClassName="lead"> no movies in list</p>
        const movies = getMoviesByGenre(this.state.movies, currentGenre)
        const pmovies = paginate(movies, currentPage, pageSize)
        const count = movies.length
        const allgenres = this.getAllGenres()
        console.log("allgen ", allgenres, "allmoves", pmovies)
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <GenreGroup genres={allgenres} onGenreChange={this.handleGenreChange} currentGenre={this.state.currentGenre} />
                    </div>
                    <div className="col-2">
                        <table className="table">

                            <tr >
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Like</th>
                                <th scope="col">Action</th>
                            </tr>
                            {this.getmovies(pmovies)}
                        </table>

                    </div>
                </div>
                <Pagination itemsCount={count} pageSize={pageSize} onPageChange={this.handlePageChange} currentPage={currentPage} />
            </React.Fragment>
        );
    }
}

export default MovieManager;