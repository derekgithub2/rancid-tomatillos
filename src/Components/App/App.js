import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import movieData from '../../movieData'
import Movies from '../Movies/Movies'

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

  render() {
    return(
      <main className='app'>
        <Nav />
        <Movies movies={this.state.movies} getCurrentMovie={this.getCurrentMovie}/>
      </main>
    )
  }
}

export default App;
