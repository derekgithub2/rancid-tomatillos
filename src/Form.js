import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            searched: ''
        }
    }

    handleEvent = (e) => {
        e.preventDefault();
        const singleMovie = this.props.movies.filter(movie => movie.title === e.target.value)
        this.setState({ searched: singleMovie[0].id})
    }

    render() {
        const sortedMovies = this.props.movies.map(movie => movie).sort((a, b) => a.title.localeCompare(b.title))
        const movieTitles = sortedMovies.map(movie => {
            return (
                <option key ={movie.id} id={movie.id}>{movie.title}</option>
            )
        })

        return(
            <form onChange={this.handleEvent}>
                <input type="text" list="titles" placeholder="Search.."  autoComplete="off" name="search" />
                <datalist id="titles">{movieTitles}</datalist>
                <Link to={`/${this.state.searched}`}>
                    <button type="submit">Submit</button>
                </Link>
            </form>
        )
    }
}

export default Form