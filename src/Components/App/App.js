import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // functions in here

  render() {
    return(
      <main className='app'>
        <Nav />
      </main>
    )
  }
}

export default App;
