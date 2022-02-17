import { connect } from 'react-redux';
import { selectPartyMember } from './../../store/actions/selectPartyMember.action';
import Bill from './Bill';

const mapStateToProps = (state) => ({
    quantity: state.party.quantity,
    amount: state.party.amount,
    selected: state.party.selected,
});

const mapDispatchToProps = (dispatch) => ({
    selectPartyMember: (selected) => dispatch(selectPartyMember(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
