import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            searched: '',
            error: ''
        }
    }

    onChange = (e) => {
        const singleMovie = this.props.movies.find(movie => movie.title === e.target.value)
        this.setState({ searched: singleMovie === undefined ? '' : singleMovie.id})
    }

    handleSubmit = (e) => {
        if(this.state.searched === '') {
            this.setState({ error: "Incorrect movie input"})
            swal('Movie Title Not Found', 'Please try again!', 'error');
        }
    }

    render() {
        const sortedMovies = this.props.movies.map(movie => movie).sort((a, b) => a.title.localeCompare(b.title))
        const movieTitles = sortedMovies.map(movie => {
            return (
                <option key ={movie.id} id={movie.id}>{movie.title}</option>
            )
        })

        return(
            <div>
                <form onChange={this.onChange}>
                    <input type="text" list="titles" placeholder="Search.."  autoComplete="off" name="search" required/>
                    <datalist id="titles">{movieTitles}</datalist>
                    <Link to={`/${this.state.searched}`}>
                        <button onClick={this.handleSubmit} type="submit">Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Form