import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { calculateAmount } from '../../store/actions/calculateAmount.action';
import { addDish } from './../../store/actions/addDish.action';
import { removeDish } from './../../store/actions/removeDish.action';
import MenuDishButton from './MenuDishButton';

const mapStateToProps = (state, ownProps) => {
    const i = state.party.selected - 1;
    const diner = state.party.list[i] ?? [];
    return {
        active: diner.find((dish) => dish === ownProps.id) ? true : false,
        guest: i,
        id: ownProps.id,
        name: ownProps.name,
        price: ownProps.price,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addDish: () => dispatch(batchActions([addDish(ownProps.id), calculateAmount(ownProps.price)])),
    removeDish: () => dispatch(batchActions([removeDish(ownProps.id), calculateAmount(-ownProps.price)])),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuDishButton);
