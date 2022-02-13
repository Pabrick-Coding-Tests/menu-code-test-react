import React from 'react';
import { DESCRIPTIONS } from '../../utils/descriptions';
import './MenuDishButton.scss';

const MenuDishButton = ({ id, name, price }) => {
    const toggleButton = () => {
        console.log('Clicked' + name);
    };
    return (
        <button className="dish" onClick={toggleButton}>
            <div className="name">{name}</div>
            <div className="description">{DESCRIPTIONS[id - 1]}</div>
            <div className="price">{price}</div>
        </button>
    );
};

export default MenuDishButton;
