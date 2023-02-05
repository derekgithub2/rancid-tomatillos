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

    const toHoursAndMinutes = (totalMinutes) => {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
      
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
      }

    return (
        <div className="current-movie" style={currentMovieStyle}>
            <aside className="left-section">
                <section className='button-wrapper'>
                    <img className="back-button" src={backbutton} alt="backbutton" onClick={() => displayAllMovies()}/>
                </section>
                <section>
                    <div className='movieDetails'>
                        <p>{currentMovie.genres.join(" | ")}</p>
                        <p>{toHoursAndMinutes(currentMovie.runtime)}</p>
                    </div>
                    <p className='title'>{currentMovie.title} ({currentMovie.release_date.slice(0,4)})</p>
                    <p className='overview'>{currentMovie.overview}</p>
                    <p>Rating: {currentMovie.average_rating.toFixed(2)}</p>
                    <p>Budget: {formatter.format(currentMovie.budget)}</p>
                    <p>Revenue: {formatter.format(currentMovie.revenue)}</p>
                </section>
            </aside>
        </div>
    )
}


export default CurrentMovie