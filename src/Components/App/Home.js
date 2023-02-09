import React from 'react';
import Nav from '../Nav/Nav'
import Movies from '../Movies/Movies'
// This should be rendered as the default landing page. 

const Home = (prop) => {
  return (
    <div>
        <Nav />
        <Movies movies={prop.movies} getCurrentMovie={this.getCurrentMovie}/>
    </div>
  );
}

export default Home;
