import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import NoteList from '../note-list/note-list';
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

  handleRemoveNote(noteToRemove) {
    this.setState((previousState) => {
      return {
        note: previousState.notes.filter(note => note._id !== noteToRemove._id),
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
              <h3 className="note-title">{note.title}</h3> 
              
               <p className="note-content">{note.content}</p>
               <button className="remove-button" onClick={this.handleRemoveNote}>Remove Note</button>
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
