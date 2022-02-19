import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Landing = ({ quantity, setQuantity }) => (
    <div className="landing">
        <h1 onClick={() => setQuantity(quantity)}>
            Welcome to <br />
            'Le Restaurant'
        </h1>
        <Link to="/menu">Start order for {quantity}</Link>
    </div>
);

export default Landing;
