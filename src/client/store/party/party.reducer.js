import { addDish, addToBill, createEmptyMatrix, removeDish } from './../../logic/logic';
import initState from './init.state';

const party = (party = initState, action) => {
    switch (action.type) {
        case 'CLEAR_PARTY':
            return {
                ...initState,
            };
        case 'SET_EMPTY_DINER':
            return {
                ...party,
                diner: createEmptyMatrix(action.guests),
            };
        case 'SET_GUESTS':
            return {
                ...party,
                guests: action.guests,
            };
        case 'SET_CURRENT_GUEST':
            return {
                ...party,
                currentGuest: action.currentGuest,
            };
        case 'SET_BILL':
            return {
                ...party,
                bill: addToBill(party.bill, action.bill),
            };
        case 'ADD_DISH':
            party.diner[party.currentGuest - 1] = addDish(party.diner[party.currentGuest - 1], action.id);
            return {
                ...party,
                diner: [...party.diner],
            };
        case 'REMOVE_DISH':
            party.diner[party.currentGuest - 1] = removeDish(party.diner[party.currentGuest - 1], action.id);
            return {
                ...party,
                diner: [...party.diner],
            };
        default:
            return party;
    }
};

export default party;
