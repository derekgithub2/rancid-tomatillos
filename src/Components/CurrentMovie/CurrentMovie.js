import React, { Component } from 'react';
import './CurrentMovie.css'
import backbutton from '../../images/backbutton.png' 
import { Link } from 'react-router-dom'
import { getSingleMovie } from '../../apiCalls';

class CurrentMovie extends Component {
    constructor() {
        super()
        this.state = {
            currentMovie: '',
            error: ''
        }
    }

    componentDidMount() {
        getSingleMovie(this.props.currentMovieId)
            .then((data => {
                this.setState({ currentMovie: data.movie })
                console.log(this.state.currentMovie.genres)
                console.log(this.state.currentMovie.release_date)
                console.log(this.state.currentMovie.average_rating)
            }
            ))
            .catch(error => this.setState({ error: 'Something went wrong.' }))
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

        return (
            // ISSUES:
                // line 61: genres.join(" | ")
                // line 64: release_date.slice(0, 4)
                // 1ine 66: average_rating.toFixed(2)
            <div className="current-movie" style={currentMovieStyle}>
                <aside className="left-section">
                    <Link to='/' className='button-wrapper'>
                        <img className="back-button" src={backbutton} alt="backbutton" />
                    </Link>
                    <section>
                        <div className='movieDetails'>
                            {/* <p>{this.state.currentMovie.genres.join(" | ")}</p> */}
                            <p>{toHoursAndMinutes(this.state.currentMovie.runtime)}</p>
                        </div>
                        {/* <p className='title'>{this.state.currentMovie.title} ({this.state.currentMovie.release_date.slice(0,4)})</p> */}
                        <p className='overview'>{this.state.currentMovie.overview}</p>
                        {/* <p>Rating: {this.state.currentMovie.average_rating.toFixed(2)}</p> */}
                        <p>Budget: {formatter.format(this.state.currentMovie.budget)}</p>
                        <p>Revenue: {formatter.format(this.state.currentMovie.revenue)}</p>
                    </section>
                </aside>
            </div>
        )
    }
}


export default CurrentMovie