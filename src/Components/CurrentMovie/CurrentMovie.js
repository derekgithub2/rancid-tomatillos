import React from 'react';
import './CurrentMovie.css'

const CurrentMovie = ({ currentMovie }) => {

    const currentMovieStyle = {
        backgroundImage: `url(${currentMovie.backdrop_path})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className="current-movie" style={currentMovieStyle}>
            <section className="left-section">
                <p>MOVIE DETAILS HERE</p>
                <p>{currentMovie.title}</p>
                <p></p>
            </section>
            {/* <section className="right-section">
                <img src={currentMovie.poster_path}/>
            </section> */}
        </div>
    )
}


export default CurrentMovie