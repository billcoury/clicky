import React from 'react';
import './Card.css';

const Card = props => (
    <div
        role='img'
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url('${props.image}')` }}
        className='card'
    />
);

export default Card;
