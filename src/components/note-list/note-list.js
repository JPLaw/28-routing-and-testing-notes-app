import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';
import './note-list.scss';

export default class NoteList extends React.Component {  
  render() {
    const { notes, handleRemoveNote } = this.props;

    return (
      <React.Fragment>
        <h2>My Notes</h2>
        <ul className="note-list">
          {notes.map((note) => {
            const { _id } = note;
            return (
              <NoteItem 
                key={ _id } 
                note={ note } 
                handleRemoveNote={ handleRemoveNote }
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
  handleRemoveNote: PropTypes.func,
};
