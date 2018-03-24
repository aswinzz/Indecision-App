import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal className="popup" onRequestClose={props.handleSelectedOption} isOpen={!!props.selectedOption} contentLabel="Selected Option">
            <p className="header__title">Selected Option</p>
            <p className="header__subtitle">{props.selectedOption}</p>
            <button class="small-button" onClick={props.handleSelectedOption}>Okay</button>
        </Modal>
);

export default OptionModal;