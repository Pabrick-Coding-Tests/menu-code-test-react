import { connect } from 'react-redux';
import { setQuantity } from '../../store/actions/setQuantity.action';
import Bill from './Bill';

const mapStateToProps = (state) => ({
    quantity: state.party.quantity,
    amount: state.party.amount,
});

const mapDispatchToProps = (dispatch) => ({
    setQuantity: (quantity) => dispatch(setQuantity(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
