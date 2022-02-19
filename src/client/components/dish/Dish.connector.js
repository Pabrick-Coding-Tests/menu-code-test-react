import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { setErrorMessage } from '../../store/error/actions/setErrorMessage.action';
import { addDish } from '../../store/party/actions/addDish.action';
import { removeDish } from '../../store/party/actions/removeDish.action';
import { setBill } from '../../store/party/actions/setBill.action';
import Dish from './Dish';

const mapStateToProps = (state, ownProps) => {
    const index = state.party.currentGuest - 1;
    const guestDiner = state.party.diner[index];
    return {
        diner: state.party.diner,
        active: guestDiner.find((dish) => dish === ownProps.id) ? true : false,
        currentIndex: index,
        id: ownProps.id,
        name: ownProps.name,
        price: ownProps.price,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addDish: () => dispatch(batchActions([addDish(ownProps.id), setBill(ownProps.price)])),
    removeDish: () => dispatch(batchActions([removeDish(ownProps.id), setBill(-ownProps.price)])),
    showError: (error) => dispatch(setErrorMessage(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dish);
