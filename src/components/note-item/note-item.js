import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';
import './note-item.scss';

export default class NoteItem extends React.Component {
  render() {

    const { note, handleRemoveNote, handleUpdateNote } = this.props;
    const showModal = () => handleUpdateNote({ ...note, editing: true});
    const hideModal = () => handleUpdateNote({ ...note, editing: false});
    const updateAndClose = (updatedNote) => {
      return handleUpdateNote({ ...updatedNote, editing: false});
    };
    return (
      <div className="note-item" data-cy="note-item" onClick={showModal}>
      <strong>{note.title}: </strong>
      <p>{note.content}</p>
      <button
        onClick={() => handleRemoveNote(note) } data-cy="note-item-del-button">
        Delete
      </button>
      <Modal
      show={note.editing}
      hideModal={hideModal}
      >
      <h3>{note.title}</h3>
      <NoteForm
      handleComplete={updateAndClose}
      note={note}
      />
      </Modal>
    </div>
    );   
  }
}


