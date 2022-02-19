import { connect } from 'react-redux';
import { setErrorMessage } from './../../store/error/actions/setErrorMessage.action';
import Modal from './Modal';

const mapStateToProps = (state) => {
    return {
        message: state.error.message,
    };
};

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(setErrorMessage('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
