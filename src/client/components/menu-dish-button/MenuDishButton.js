import React from 'react';
import { DESCRIPTIONS } from '../../utils/descriptions';
import './MenuDishButton.scss';

const MenuDishButton = ({ active, id, name, price, addDish, removeDish }) => {
    const toggleButton = () => {
        return active ? removeDish(id) : addDish(id);
    };
    return (
        <button className={`dish ${active ? 'selected' : ''}`} onClick={toggleButton}>
            <div className="name">{name}</div>
            <div className="description">{DESCRIPTIONS[id - 1]}</div>
            <div className="price">{price}</div>
        </button>
    );
};

export default MenuDishButton;
