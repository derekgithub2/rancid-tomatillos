import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CurrentMovie from './Components/CurrentMovie/CurrentMovie'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            searched: ''
        }
    }

    // handleChange = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    // const searchedMovie = this.props.movies.find(movie => movie.title === inputValue)
    // this.setState({ searched: searchedMovie.id })

    handleClick = (e) => {
        e.preventDefault();
        const input = e.target.children[0].value
        const singleMovie = this.props.movies.filter(movie => movie.title === input)
        this.setState({ searched: singleMovie[0].id})
    }

    render() {

        const sortedMovies = this.props.movies.map(movie => movie).sort((a, b) => a.title.localeCompare(b.title))

        const movieTitles = sortedMovies.map(movie => {
            return (
                <option key ={movie.id} id={movie.id}>{movie.title}</option>
            )
        })
    
            // Comment out lines 44, 46, & 47 - 51 in order to see state updating
        
        return(
            <form onSubmit={this.handleClick}>
                <input type="text" list="titles" placeholder="Search.."  autoComplete="off" name="search" />
                <datalist id="titles">{movieTitles}</datalist>
                <Link to={`/:movieId`}>
                    <button type="submit">Submit</button>
                </Link>
                <Route exact path={`/:movieId}`} render={({ match }) => {
                    let id = parseInt(match.params.movieId)
                    return <CurrentMovie currentMovieId={id}/>
                    }}
                />
            </form>
        )
    }
}

export default Form