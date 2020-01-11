import React from 'react';
import './Header.css';

const Header = props => (
    <div className='header'>
        <h1>Memory Game</h1>
        <p id="instructions">Click on an image to earn points, but don’t click on any more than once.</p>
        <ul id="scoreboard">
            <li>Current Score: {props.score}</li>
            <li>Best Score: {props.bestScore}</li>
        </ul>
    </div>
);

export default Header;
