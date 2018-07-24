import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';
import './note-item.scss';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.handleRemoveNote(this.props.note);
  }
  
  render() {
    const { title, content } = this.props.note;
    return (
      <li className="note-item">
        <strong>{title}: </strong>
        {content}
        <button 
          type="button" 
          onClick={ this.handleClick }
        >Remove Note</button>
      </li>
    );

    const { note, handleRemoveNote, handleUpdateNote } = this.props;
    const showModal = () => handleUpdateNote({ ...note, editing: true});
    const hideModal = () => handleUpdateNote({ ...note, editing: false});
    const updateAndClose = (updatedNote) => {
      return handleUpdateNote({ ...updatedNote, editing: false});
    };
    return (
      <div className="note-item" data-cy="note-item">
      <strong>{note.title}</strong>
      <button
        onClick={() => handleRemoveNote(note) } data-cy="note-item-button">
        Delete
      </button>
      <button 
      onClick={showModal}
      data-cy="note-item-button">
      Update
      </button>
      <Modal
      show={note.editing}
      hideModal={hideModal}
      >
      <h3>Editing {note.title}</h3>
      <NoteForm
      handleComplete={updateAndClose}
      note={note}
      />
      </Modal>
    </div>
    )    
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
};
