import { connect } from 'react-redux';
import { setGuests } from '../../store/party/actions/setGuests.action';
import Landing from './Landing';

const mapStateToProps = (state) => ({
    guests: state.party.guests,
});

const mapDispatchToProps = (dispatch) => ({
    setGuests: (guests) => dispatch(setGuests(guests)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
