import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import NoteItem from '../note-item/note-item';
import { renderIf } from '../../lib/utils';
import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };
  }

  handleAddNote = (note) => {
    if (note.title === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();
    note._id = uuid();
    note.editing = false;
    note.completed = false;
    
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note], 
        error: null,
      };
    });
  }

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note._id !== noteToRemove._id),
      };
    });
  }

  handleUpdateNote = (noteToUpdate) => {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => (note._id === noteToUpdate._id ? noteToUpdate : note)),
      };
    });
  }

  handleNotesList = () => {
    return (
      <div>
        {
          this.state.notes.map((note) => {
            return (
              <div className="note-post" key={note._id}>
                <NoteItem 
                  note={note}
                  handleUpdateNote={this.handleUpdateNote}
                  handleRemoveNote={this.handleRemoveNote}
                  />
              </div>
            );
          })
        }
      </div>
    );
  }


render() {
  return (
    <section className="dashboard">
      <NoteForm handleComplete={ this.handleAddNote } />
      {
        renderIf(this.state.error && <h2 className="error">Please enter a note title.</h2>)
      }
      { this.handleNotesList() }
    </section>
  );
}
}
