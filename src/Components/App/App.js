import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Movies from '../Movies/Movies'
import CurrentMovie from '../CurrentMovie/CurrentMovie'
import { getAllMovies } from '../../apiCalls'
import { Route, Switch } from 'react-router-dom'


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

  render() {
    return(
      <main className='app'>
        <Switch>
          <Route exact path='/' render={() => {
              return(
                <div>
                  <Nav movies={this.state.movies}/>
                  <Movies movies={this.state.movies}/>
                </div>
              )
            }}/>
            <Route exact path='/:movieId' render={({ match }) => {
                let id = parseInt(match.params.movieId)
                return <CurrentMovie currentMovieId={id}/>
              }}
            />
        </Switch>
      </main>
    )
  }
}

export default App;