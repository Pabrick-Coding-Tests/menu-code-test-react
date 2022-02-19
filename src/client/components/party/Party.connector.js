import { connect } from 'react-redux';
import { setErrorMessage } from '../../store/error/actions/setErrorMessage.action';
import { setCurrentGuest } from '../../store/party/actions/setCurrentGuest';
import Party from './Party';

const mapStateToProps = (state) => ({
    diner: state.party.diner,
    currentGuest: state.party.currentGuest,
    guests: state.party.guests,
    bill: state.party.bill,
});

const mapDispatchToProps = (dispatch) => ({
    selectGuest: (guest) => dispatch(setCurrentGuest(guest)),
    showError: (error) => dispatch(setErrorMessage(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Party);
