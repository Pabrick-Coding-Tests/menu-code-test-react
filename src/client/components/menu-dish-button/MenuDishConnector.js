import { connect } from 'react-redux';
import { addDish } from './../../store/actions/addDish.action';
import { removeDish } from './../../store/actions/removeDish.action';
import MenuDishButton from './MenuDishButton';

const mapStateToProps = (state, ownProps) => {
    const diner = state.party.list;
    return {
        active: diner.find((dish) => dish === ownProps.id) ? true : false,
        id: ownProps.id,
        name: ownProps.name,
        price: ownProps.price,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addDish: () => dispatch(addDish(ownProps.id)),
    removeDish: () => dispatch(removeDish(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuDishButton);
