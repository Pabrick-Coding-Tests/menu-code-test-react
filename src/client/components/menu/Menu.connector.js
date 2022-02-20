import { connect } from 'react-redux';
import { setEmptyDiner } from '../../store/party/actions/setEmptyDiner.action';
import Menu from './Menu';

const mapStateToProps = (state) => ({
    guests: state.party.guests,
    diner: state.party.diner,
});

const mapDispatchToProps = (dispatch) => ({
    setEmptyDiner: (guests) => dispatch(setEmptyDiner(guests)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
