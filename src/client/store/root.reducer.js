import { combineReducers } from 'redux';
import error from './error/error.reducer';
import party from './party/party.reducer';

export default combineReducers({
    party,
    error,
});
