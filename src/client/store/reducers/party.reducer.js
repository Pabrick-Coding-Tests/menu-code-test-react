import initState from './../init.state';

const party = (party = initState, action) => {
    switch (action.type) {
        case 'INIT_DINER':
            return {
                ...party,
                diner: createEmptyMatrix(action.quantity),
            };
        case 'SET_QUANTITY':
            return {
                ...party,
                quantity: action.quantity,
            };
        case 'SELECT_GUEST':
            return {
                ...party,
                guest: action.guest,
            };
        case 'CALCULATE_AMOUNT':
            return {
                ...party,
                amount: party.amount + action.amount,
            };
        case 'ADD_DISH':
            party.diner[party.guest - 1] = addDish(getDiner(party), action.id);
            return {
                ...party,
                diner: [...party.diner],
            };
        case 'REMOVE_DISH':
            party.diner[party.guest - 1] = removeDish(getDiner(party), action.id);
            return {
                ...party,
                diner: [...party.diner],
            };
        default:
            return party;
    }
};

export default party;

function createEmptyMatrix(limit) {
    console.log('createEmptyMatrix');
    return new Array(limit).fill(new Array());
}

function getDiner(party) {
    return party.diner.at(party.guest - 1);
}

function addDish(diner, dish) {
    return [...diner, dish];
}

function removeDish(diner, dish) {
    return diner.filter((d) => d !== dish);
}
