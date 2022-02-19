import { connect } from 'react-redux';
import { initDiner } from '../../store/actions/initDiner.action';
import Menu from './Menu';

const mapStateToProps = (state) => ({
    quantity: state.party.quantity,
    diner: state.party.diner,
});

const mapDispatchToProps = (dispatch) => ({
    initDiner: (quantity) => dispatch(initDiner(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
