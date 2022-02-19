import React from 'react';
import { hasCheesecake, hasSeafood } from '../../logic/logic';
import { COLOURS } from '../../utils/colours.const';
import { DESCRIPTIONS } from '../../utils/descriptions.const';
import { CHEESE_CAKE_ERROR, SEA_FOOD_ERROR } from '../../utils/errors.const';
import { CHEESE_CAKE_ID, PRAWN_COCKTAIL_ID, SALMON_FILLET_ID } from '../../utils/ids.const';
import './Dish.scss';

const Dish = ({ diner, active, currentIndex, id, name, price, addDish, removeDish, showError }) => {
    const checkCriteria = () => {
        if (id === CHEESE_CAKE_ID && hasCheesecake(diner)) {
            showError(CHEESE_CAKE_ERROR);
        } else if ((id === PRAWN_COCKTAIL_ID || id === SALMON_FILLET_ID) && hasSeafood(diner[currentIndex])) {
            showError(SEA_FOOD_ERROR);
        } else {
            addDish();
        }
    };
    return (
        <button
            className={`dish ${active ? 'selected' : ''}`}
            style={{ backgroundColor: ` ${active ? COLOURS[currentIndex] : 'transparent'}` }}
            onClick={() => (active ? removeDish() : checkCriteria())}
        >
            <div className="name">{name}</div>
            <div className="description">{DESCRIPTIONS[id - 1]}</div>
            <div className="price">{price}</div>
        </button>
    );
};

export default Dish;
