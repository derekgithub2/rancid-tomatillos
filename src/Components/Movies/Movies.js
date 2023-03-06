import React from "react";
import Card from "../Card/Card";
import './Movies.css'
import PropTypes from 'prop-types';


const Movies = ({movies, getCurrentMovie}) => {

    const sortedMovies = movies.map(movie => movie).sort((a, b) => a.title.localeCompare(b.title))

    const moviePoster = sortedMovies.map(movie => {
        return (
            <Card
                image={movie.poster_path}
                title={movie.title}
                id={movie.id}
                key={movie.id}
                getCurrentMovie={getCurrentMovie}
            />
        )
    })

    return (
        <div className="movieContainer">
            {moviePoster}
        </div>
    )
}

export default Movies;

Movies.propTypes = {
    movies: PropTypes.array
}