import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <header className='navbar'>
            <select>
                <option value='action'>Action</option>
                <option value='comedy'>Comedy</option>
                <option value='drama'>Drama</option>
                <option value='family'>Family</option>
                <option value='horror'>Horror</option>
                <option value='thriller'>Thriller</option>
            </select>
            <ul>
                <li>Action</li>
                <li>Comedy</li>
                <li>Drama</li>
                <li>Family</li>
                <li>Horror</li>
                <li>Thriller</li>
            </ul>
        </header>
    )
}

export default Nav