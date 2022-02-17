import React from 'react';
import { COLOURS } from '../../utils/colours.const';
import { DESCRIPTIONS } from '../../utils/descriptions.const';
import './MenuDishButton.scss';

const MenuDishButton = ({ active, guest, id, name, price, addDish, removeDish }) => {
    const toggleButton = () => (active ? removeDish() : addDish());
    return (
        <button
            className={`dish ${active ? 'selected' : ''}`}
            style={{ backgroundColor: ` ${active ? COLOURS[guest] : 'transparent'}` }}
            onClick={toggleButton}
        >
            <div className="name">{name}</div>
            <div className="description">{DESCRIPTIONS[id - 1]}</div>
            <div className="price">{price}</div>
        </button>
    );
};

export default MenuDishButton;
