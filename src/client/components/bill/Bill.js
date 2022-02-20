import React from 'react';
import { Link } from 'react-router-dom';
import './Bill.scss';

const Bill = ({ guests, bill, clearParty }) => (
    <section className="bill">
        <h1 className="bill__total">Total bill: £{bill}</h1>
        <h2 className="bill__per-guest">per Guest: £{bill / guests} </h2>
        <Link className="bill__button" to="/" onClick={() => clearParty()}>
            Start again
        </Link>
    </section>
);

export default Bill;
