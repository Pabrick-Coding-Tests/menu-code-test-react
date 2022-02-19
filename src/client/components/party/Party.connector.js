import { connect } from 'react-redux';
import { selectGuest } from '../../store/actions/selectGuest';
import Party from './Party';

const mapStateToProps = (state) => ({
    quantity: state.party.quantity,
    amount: state.party.amount,
    guest: state.party.guest,
});

const mapDispatchToProps = (dispatch) => ({
    selectGuest: (guest) => dispatch(selectGuest(guest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Party);
