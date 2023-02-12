import React, { Component } from 'react';
import './CurrentMovie.css'
import backbutton from '../../images/backbutton.png' 
import { Link } from 'react-router-dom'
import { 
    getSingleMovie,
    getMovieVideo
 } from '../../apiCalls';

class CurrentMovie extends Component {
    constructor() {
        super()
        this.state = {
            currentMovie: '',
            movieTrailer: '',
            error: ''
        }
    }

    componentDidMount() {
        getSingleMovie(this.props.currentMovieId)
            .then((data => this.setState({ currentMovie: data.movie })))
            .catch(error => this.setState({ error: 'Something went wrong displaying this movie.' }))
        getMovieVideo(this.props.currentMovieId)
            .then(data => {
                let trailer = data.videos.find(video => video.type === 'Trailer')
                this.setState({movieTrailer: trailer})
            })
            .catch(error => this.setState({ error: 'Something went wrong displaying this trailer.' }))
    }

    render() {

        const currentMovieStyle = {
            backgroundImage: `url(${this.state.currentMovie.backdrop_path})`,
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

        const trailerPath = `https://www.youtube.com/watch?v=${this.state.movieTrailer.key}`

        return (
            <div className="current-movie" style={currentMovieStyle}>
                <aside className="left-section">
                    <Link to='/' className='button-wrapper'>
                        <img className="back-button" src={backbutton} alt="backbutton" />
                    </Link>
                    <section>
                        <div className='movieDetails'>
                            <p>{String(this.state.currentMovie.genres).split(",").join(" | ")}</p>
                            <p>{toHoursAndMinutes(this.state.currentMovie.runtime)}</p>
                        </div>
                        <p className='title'>{this.state.currentMovie.title} ({String(this.state.currentMovie.release_date).slice(0,4)})</p>
                        <p className='overview'>{this.state.currentMovie.overview}</p>
                        <p>Rating: {Number(this.state.currentMovie.average_rating).toFixed(2)}</p>
                        <p>Budget: {formatter.format(this.state.currentMovie.budget)}</p>
                        <p>Revenue: {formatter.format(this.state.currentMovie.revenue)}</p>
                        <a href={trailerPath}>
                            <button className='trailer-btn'>See Trailer</button>
                        </a>
                    </section>
                </aside>
            </div>
        )
    }
}


export default CurrentMovie