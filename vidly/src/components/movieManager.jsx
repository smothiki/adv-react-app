import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import Like from './like';


class MovieManager extends Component {
    state = {
        movies: getMovies()
    }

    deletemoviecode(id) {
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
            <td><button onClick={() => this.deletemoviecode({ id: movie._id })} className="btn btn-danger btn-sm">Delete</button></td>
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

    render() {

        if (this.state.movies.length === 0)
            return <p ClassName="lead"> no movies in list</p>

        return (

            <table className="table">

                <tr >
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Like</th>
                    <th scope="col">Action</th>
                </tr>
                {this.getallMovies()}
            </table>
        );
    }
}

export default MovieManager;