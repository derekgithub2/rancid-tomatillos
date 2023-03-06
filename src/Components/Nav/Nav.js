import React from 'react';
import './Nav.css';
import Form from '../Form/Form';
import logo from '../../images/logoRT.png'
import PropTypes from 'prop-types';

const Nav = ({movies}) => {
    
    return (
        <header className='navbar'>
            <img className='logo' alt='logo' src={logo} />
            <Form movies={movies}/>
        </header>
    )
}

export default Nav

Nav.propTypes = {
    movies: PropTypes.array
}