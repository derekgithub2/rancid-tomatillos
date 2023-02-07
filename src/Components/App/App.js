import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Movies from '../Movies/Movies'
import CurrentMovie from '../CurrentMovie/CurrentMovie'
import {
  getAllMovies,
  getSingleMovie
} from '../../apiCalls'
import { Route } from 'react-router-dom'


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
    .then((data => this.setState({movies: data.movies})))
    .catch(error => this.setState({error: 'Something went wrong.'}))
  }

  getCurrentMovie = (id) => {
    const userSelection = this.state.movies.find(movie => movie.id === id)
    getSingleMovie(userSelection.id)
      .then((data => this.setState({ currentMovie: data.movie })))
      .catch(error => this.setState({error: 'Something went wrong.'})
      )
  }

  displayAllMovies = () => {
    this.setState({ currentMovie: '' })
  }

  render() {
    return(
      <main className='app'>
        {/* { this.state.currentMovie && <CurrentMovie currentMovie={this.state.currentMovie} displayAllMovies={this.displayAllMovies}/> }
        {!this.state.currentMovie && 
          <div>
            <Nav />
            <Movies movies={this.state.movies} getCurrentMovie={this.getCurrentMovie}/>
          </div>} */}
          <Route exact path='/' render={() => {
            return(
              <div>
                <Nav />
                <Movies movies={this.state.movies}/>
              </div>
            )
          }}/>
          <Route
            exact path='/:id'
            render={({match}) => {
              let id = parseInt(match.params.id)
              return <CurrentMovie getCurrentMovie={this.getCurrentMovie}/>
            }}
          />
      </main>
    )
  }
}

export default App;
