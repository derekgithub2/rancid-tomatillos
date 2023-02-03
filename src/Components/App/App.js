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
    };
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
  }
  // functions in here

  render() {
    return(
      <main className='app'>
        <Nav />
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
