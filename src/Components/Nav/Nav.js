import React from 'react';
import './Nav.css';
import Form from '../../Form';

const Nav = ({movies}) => {
    
    return (
        <header className='navbar'>
            <select id="sortSelection" className='dropdown'>
                <option value='alphabetical'>Alphabetical </option>
                <option value='movie rating high-low'>Movie Rating: High-Low </option>
                <option value='year released high-low'>Year Released: High-Low </option>
                <option value='revenue high-low'>Revenue: High-Low </option>
                <option value='movie rating low-high'>Movie Rating: Low-High </option>
                <option value='year released low-high'>Year Released: Low-High </option>
                <option value='revenue low-high'>Revenue: Low-High </option>
            </select>
            <ul>
                <li>Action</li>
                <li>Comedy</li>
                <li>Drama</li>
                <li>Family</li>
                <li>Horror</li>
                <li>Thriller</li>
            </ul>
            <Form movies={movies}/>
        </header>
    )
}

export default Nav