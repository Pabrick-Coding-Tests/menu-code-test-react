import initState from './../init.state';

const party = (party = initState, action) => {
    switch (action.type) {
        case 'INIT_PARTY':
            return {
                ...party,
                quantity: action.quantity,
                list: initPartyList(action.quantity),
            };
        case 'SELECT_PARTY_MEMBER':
            return {
                ...party,
                selected: getPartyMember(action.selected, party.quantity),
            };
        case 'ADD_DISH':
            party.list[party.selected - 1] = addDish(currentDiner(party), action.id);
            return {
                ...party,
                list: [...party.list],
            };
        case 'REMOVE_DISH':
            party.list[party.selected - 1] = removeDish(currentDiner(party), action.id);
            return {
                ...party,
                list: [...party.list],
            };
        case 'CALCULATE_AMOUNT':
            return {
                ...party,
                amount: party.amount + action.amount,
            };
        default:
            return party;
    }
};

export default party;

function getPartyMember(selected, quantity) {
    return selected >= quantity ? quantity : selected;
}

function initPartyList(limit) {
    return new Array(limit).fill(new Array());
}

function currentDiner(party) {
    return party.list.at(party.selected - 1);
}

function addDish(list, dish) {
    return [...list, dish];
}

function removeDish(list, dish) {
    return list.filter((d) => d !== dish);
}
