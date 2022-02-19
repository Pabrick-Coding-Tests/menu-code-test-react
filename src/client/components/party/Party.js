import React from 'react';
import { COLOURS } from '../../utils/colours.const';
import './Party.scss';

const Party = ({ quantity, amount, guest, selectGuest }) => {
    const isSelected = (i) => guest === i + 1;
    const guestList = (limit) =>
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
            <div className="guests">{guestList(quantity)}</div>
            <div className={`amount ${amount ? 'show' : ''}`}>£ {amount}</div>
        </section>
    );
};

export default Party;
