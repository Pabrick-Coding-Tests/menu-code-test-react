import React from 'react';
import { COLOURS } from './../../utils/colours.const';
import './Bill.scss';

const Bill = ({ quantity, amount, selected, selectPartyMember }) => {
    const isSelected = (i) => selected === i + 1;
    const guestList = (limit) =>
        new Array(limit).fill('_').map((_, index) => (
            <button
                key={index}
                className={`${isSelected(index) ? 'selected' : ''}`}
                style={{ backgroundColor: ` ${isSelected(index) ? COLOURS[index] : 'transparent'}` }}
                onClick={() => {
                    selectPartyMember(index + 1);
                }}
            >
                {`Guest ${index + 1}`}
            </button>
        ));

    return (
        <section className="bill">
            <div className="guests">{guestList(quantity)}</div>
            <div className={`amount ${amount ? 'show' : ''}`}>£ {amount}</div>
        </section>
    );
};

export default Bill;
