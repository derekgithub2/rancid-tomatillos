import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import movieData from '../../movieData'
import Movies from '../Movies/Movies'
import CurrentMovie from '../CurrentMovie/CurrentMovie'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: '',
    };
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
  }

  getCurrentMovie = (id) => {
    const userSelection = this.state.movies.find(movie => movie.id === id)
    this.setState({ currentMovie: userSelection })
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
