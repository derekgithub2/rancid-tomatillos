import React from 'react';
import './CurrentMovie.css'
import backbutton from '../../images/backbutton.png' 

const CurrentMovie = ({ currentMovie, displayAllMovies }) => {

    const currentMovieStyle = {
        backgroundImage: `url(${currentMovie.backdrop_path})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="current-movie" style={currentMovieStyle}>
            <section className="left-section">
                <img className="back-button" src={backbutton} alt="backbutton" onClick={() => displayAllMovies()}/>
                <p>Runtime: {currentMovie.runtime} min.</p>
                <p>Genre: {currentMovie.genres.join(", ")}</p>
                <p>Release Date: {new Date(currentMovie.release_date.split("-").join("/")).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}) }</p>
                <h3>{currentMovie.title}</h3>
                <p>Average Rating: {currentMovie.average_rating.toFixed(2)}</p>
                <p>Tagline: {currentMovie.tagline}</p>
                <p>Overview: {currentMovie.overview}</p>
                <p>Budget: {formatter.format(currentMovie.budget)}</p>
                <p>Revenue: {formatter.format(currentMovie.revenue)}</p>
            </section>
        </div>
    )
}


export default CurrentMovie