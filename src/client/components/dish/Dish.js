import React from 'react';
import { COLOURS } from '../../utils/colours.const';
import { DESCRIPTIONS } from '../../utils/descriptions.const';
import './Dish.scss';

const Dish = ({ active, currentGuest, id, name, price, addDish, removeDish }) => (
    <button
        className={`dish ${active ? 'selected' : ''}`}
        style={{ backgroundColor: ` ${active ? COLOURS[currentGuest] : 'transparent'}` }}
        onClick={() => (active ? removeDish() : addDish())}
    >
        <div className="name">{name}</div>
        <div className="description">{DESCRIPTIONS[id - 1]}</div>
        <div className="price">{price}</div>
    </button>
);

export default Dish;
