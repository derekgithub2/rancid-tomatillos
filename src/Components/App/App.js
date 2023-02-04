import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import movieData from '../../movieData'
import Movies from '../Movies/Movies'
import CurrentMovie from '../CurrentMovie/CurrentMovie'
import {
  getAllMovies,
  getSingleMovie
} from '../../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: '',
      error: '',
    };
  }

  componentDidMount() {
    getAllMovies()
    .then((data => {
      this.setState({movies: data.movies})
    }))
    // Need to create a catch for error handing
  }

  getCurrentMovie = (id) => {
    const userSelection = this.state.movies.find(movie => movie.id === id)
    getSingleMovie(userSelection.id)
      .then((data => {
        this.setState({ currentMovie: data.movie })
        console.log(data)
      }))
          // Need to create a catch for error handing
  }

  displayAllMovies = () => {
    this.setState({ currentMovie: '' })
  }

  render() {
    return(
      <main className='app'>
        { this.state.currentMovie && <CurrentMovie currentMovie={this.state.currentMovie} displayAllMovies={this.displayAllMovies}/> }
        {!this.state.currentMovie && 
          <div>
            <Nav />
            <Movies movies={this.state.movies} getCurrentMovie={this.getCurrentMovie}/>
          </div>}
      </main>
    )
  }
}

export default App;
