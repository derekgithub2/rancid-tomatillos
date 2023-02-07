import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ image, title, id, getCurrentMovie }) => {
    return (
        <Link to={`/${id}`} className='card' >
            <img src={image} alt={title} id={id} onClick={() => getCurrentMovie(id)}/>
        </Link>
    )
}

export default Card