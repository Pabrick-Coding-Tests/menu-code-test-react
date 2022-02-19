import { connect } from 'react-redux';
import { setCurrentGuest } from '../../store/party/actions/setCurrentGuest';
import Party from './Party';

const mapStateToProps = (state) => ({
    currentGuest: state.party.currentGuest,
    guests: state.party.guests,
    bill: state.party.bill,
});

const mapDispatchToProps = (dispatch) => ({
    selectGuest: (guest) => dispatch(setCurrentGuest(guest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Party);
