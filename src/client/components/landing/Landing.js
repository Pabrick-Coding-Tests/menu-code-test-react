import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Landing = ({ guests, setGuests }) => (
    <div className="landing">
        <h1 className="landing__title">
            Welcome to <br />
            'Le Restaurant'
        </h1>
        <Link className="landing__button" to="/menu" onClick={() => setGuests(guests)}>
            Start order for {guests}
        </Link>
    </div>
);

export default Landing;
