import React from 'react';
import { Link } from 'react-router-dom';

const Bill = () => (
    <section>
        <h1>Bill Test</h1>
        <div>
            <Link to="/menu">Back to Menu</Link>
        </div>
        <div>
            <Link to="/">Order meal</Link>
        </div>
    </section>
);

export default Bill;
