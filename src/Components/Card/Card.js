import React from 'react';
import './Card.css'

const Card = ({ image, title, id }) => {
    return (
        <div className='card'>
            <img src={image} alt={title} id={id} />
        </div>
    )
}

export default Card