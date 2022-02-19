import React from 'react';
import { Link } from 'react-router-dom';
import './Bill.scss';

const Bill = ({ quantity, amount }) => (
    <main>
        <h1>Total bill: {amount}</h1>
        <Link onClick={() => setQuantity(quantity)} to="/landing">
            Start again
        </Link>
    </main>
);

export default Bill;
