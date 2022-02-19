import React from 'react';
import { COLOURS } from '../../utils/colours.const';
import { Link } from 'react-router-dom';
import './Party.scss';

const Party = ({ currentGuest, guests, bill, selectGuest }) => {
    const isSelected = (i) => currentGuest === i + 1;
    const guestTemplate = (limit) =>
        new Array(limit).fill('_').map((_, index) => (
            <button
                key={index}
                className={`${isSelected(index) ? 'selected' : ''}`}
                style={{ backgroundColor: ` ${isSelected(index) ? COLOURS[index] : 'transparent'}` }}
                onClick={() => {
                    selectGuest(index + 1);
                }}
            >
                {`Guest ${index + 1}`}
            </button>
        ));

    return (
        <section className="party">
            <div className="party__guests">{guestTemplate(guests)}</div>
            <div className={`party__bill ${bill ? 'show' : ''}`}>£ {bill}</div>
            <Link className={`party__checkout ${bill ? 'show' : ''}`} to="/bill">
                Checkout
            </Link>
        </section>
    );
};

export default Party;
