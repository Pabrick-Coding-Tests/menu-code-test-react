import initState from './../init.state';

const member = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_DISH':
            return {
                ...state,
                list: [...state.list, action.dish],
            };
        case 'REMOVE_DISH':
            return {
                ...state,
                list: state.list.filter((dish) => dish !== action.dish),
            };
        default:
            return state;
    }
};

export default member;
