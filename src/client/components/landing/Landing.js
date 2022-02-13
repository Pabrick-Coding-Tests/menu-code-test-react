import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
    <main>
        <h1>
            Welcome to <br />
            'Le Restaurant'
        </h1>
        <Link to="/menu">Start order</Link>
    </main>
);

export default Landing;
