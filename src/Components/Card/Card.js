import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ image, title, id }) => {
    return (
        <Link to={`/${id}`}>
            <img className='card' src={image} alt={title} id={id}/>
        </Link>
    )
}

export default Card