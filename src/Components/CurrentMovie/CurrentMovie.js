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

    return (
        <div className="current-movie" style={currentMovieStyle}>
            <section className="left-section">
                <img className="back-button" src={backbutton} alt="backbutton" onClick={() => displayAllMovies()}/>
                <h3>{currentMovie.title}</h3>
                <p>Average Rating: {currentMovie.average_rating.toFixed(2)}</p>
                <p>Release Date: {currentMovie.release_date}</p>
            </section>
        </div>
    )
}


export default CurrentMovie