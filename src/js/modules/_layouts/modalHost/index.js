import React, { Component } from 'react';
import pt from 'prop-types';
import { Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';

import modals from './modals.scss';

class NullView extends Component {
  render() {
    return (
      <div>NullView</div>
    );
  }
}

class BootstrapModal extends Component {
  static propTypes = {
    message: pt.string.isRequired,
    handleHide: pt.func.isRequired
  };

  render() {
    const {
      templates,
      className,
      backdropClassName,
      dialogClassName,
      cClassName,
      show,
      handleHide,
      message,
      hideModal,
      id
    } = this.props;

    const View = templates[id] || NullView;

    return (
      <Modal
        show={show}
        keyboard
        onHide={handleHide}
        className={className}
        backdropClassName={backdropClassName}
        dialogClassName={dialogClassName}>
        <Modal.Body>
          <View dependingFlows={templates} hideModal={hideModal} />
        </Modal.Body>
      </Modal>
    );
  }
}

export default connectModal({
  name: ''
})(BootstrapModal);
