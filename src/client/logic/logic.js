import { CHEESE_CAKE_ID, PRAWN_COCKTAIL_ID, SALMON_FILLET_ID } from './../utils/ids.const';

export function hasCheesecake(diner) {
    return diner.map((guestDiner) => guestDiner.includes(CHEESE_CAKE_ID)).includes(true);
}

export function hasSeafood(guestDiner) {
    return guestDiner.includes(PRAWN_COCKTAIL_ID) || guestDiner.includes(SALMON_FILLET_ID) ? true : false;
}

export function createEmptyMatrix(limit) {
    return new Array(limit).fill(new Array());
}

export function addDish(diner, dish) {
    return [...diner, dish];
}

export function removeDish(diner, dish) {
    return diner.filter((d) => d !== dish);
}

export function addToBill(bill, amount) {
    return bill + amount;
}
