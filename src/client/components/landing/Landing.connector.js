import { connect } from 'react-redux';
import { setQuantity } from '../../store/actions/setQuantity.action';
import Landing from './Landing';

const mapStateToProps = (state) => ({
    quantity: state.party.quantity,
});

const mapDispatchToProps = (dispatch) => ({
    setQuantity: (quantity) => dispatch(setQuantity(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
