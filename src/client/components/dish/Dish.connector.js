import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { addDish } from '../../store/party/actions/addDish.action';
import { removeDish } from '../../store/party/actions/removeDish.action';
import { setBill } from '../../store/party/actions/setBill.action';
import Dish from './Dish';

const mapStateToProps = (state, ownProps) => {
    const i = state.party.currentGuest - 1;
    const diner = state.party.diner[i] ?? [];
    return {
        active: diner.find((dish) => dish === ownProps.id) ? true : false,
        currentGuest: i,
        id: ownProps.id,
        name: ownProps.name,
        price: ownProps.price,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addDish: () => dispatch(batchActions([addDish(ownProps.id), setBill(ownProps.price)])),
    removeDish: () => dispatch(batchActions([removeDish(ownProps.id), setBill(-ownProps.price)])),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dish);
