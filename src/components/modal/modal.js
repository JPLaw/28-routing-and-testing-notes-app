import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

export default class Modal extends React.Component {
  render() {
    const showHiddenClassName = this.props.show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={showHiddenClassName} data-cy="modal">
        <main className="modal-main">
        <button onClick={this.props.closeModal} className="close-button">X</button>
        {this.props.children}
        </main>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.node,
};
