import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import './dashboard';

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
    return this.setState((previousState) => {
      return {
        expenses: [...previousState.notes, note], 
        error: null,
      };
    });
  }

  handleNotesList = () => {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note._id}>
              {note.title} : ${note.price}
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="dashboard">
      <NoteForm handleAddNote={ this.handleAddNote } />
      {
        this.state.error && <h2 className="error">Please enter a title</h2>
      }
      { this.handleNotesList() }
      </section>
    );
  }
}
