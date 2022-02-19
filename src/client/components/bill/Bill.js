import React from 'react';
import { Link } from 'react-router-dom';
import './Bill.scss';

const Bill = ({ guests, bill, clearParty }) => (
    <main>
        <h1>Total bill: £{bill} </h1>
        <h2>per Guest: £{bill / guests} </h2>
        <Link to="/" onClick={() => clearParty()}>
            Start again
        </Link>
    </main>
);

export default Bill;
