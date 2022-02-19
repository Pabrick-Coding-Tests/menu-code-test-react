import React from 'react';
import './Modal.scss';

const Modal = ({ message, close }) => (
    <section className="modal" style={{ display: ` ${message === '' ? 'none' : 'flex'}` }}>
        <div className="overlay"></div>
        <div className="popup">
            <p className="popup__message">{message}</p>
            <button className="popup__button" onClick={close}>
                Close
            </button>
        </div>
    </section>
);

export default Modal;
