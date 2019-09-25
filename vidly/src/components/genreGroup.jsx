import React, { Component } from 'react';
import _ from 'lodash';

const GenreGroup = (props) => {
    const { genres, currentGenre } = props;

    console.log("genres", genres, "currentGenre", currentGenre)
    return (
        <ul className="list-group">
            {genres.map(genre => (<li key={genre} className={genre === currentGenre ? "list-group-item active" : "list-group-item"}>
                <a onClick={() => props.onGenreChange(genre)} className="page-link">{genre}</a>
            </li>))}
        </ul>);
}

export default GenreGroup;