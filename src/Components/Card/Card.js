import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({image, title, id}) => {
    return (
        <Link to={`/${id}`}>
            <img className='card' src={image} alt={title} id={id}/>
        </Link>
    )
}

export default Card;

Card.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number
}