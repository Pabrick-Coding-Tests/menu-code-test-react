import { connect } from 'react-redux';
import { clearParty } from './../../store/party/actions/clearParty.action';
import Bill from './Bill';

const mapStateToProps = (state) => ({
    bill: state.party.bill,
    guests: state.party.guests,
});

const mapDispatchToProps = (dispatch) => ({
    clearParty: () => dispatch(clearParty()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
