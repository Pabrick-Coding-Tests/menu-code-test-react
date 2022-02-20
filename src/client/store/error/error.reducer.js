import initState from './init.state';

const error = (error = initState, action) => {
    switch (action.type) {
        case 'SET_ERROR_MESSAGE':
            return {
                ...error,
                message: action.message,
            };
        default:
            return error;
    }
};

export default error;
