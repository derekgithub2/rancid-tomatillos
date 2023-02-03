import React from 'react';
import './Card.css'

const Card = ({ image, title, id, getCurrentMovie }) => {
    return (
        <div className='card' >
            <img src={image} alt={title} id={id} onClick={() => getCurrentMovie(id)}/>
        </div>
    )
}

export default Card