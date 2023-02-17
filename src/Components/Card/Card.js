import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <Link to={`/${props.id}`}>
            <img className='card' src={props.image} alt={props.title} id={props.id}/>
        </Link>
    )
}

export default Card