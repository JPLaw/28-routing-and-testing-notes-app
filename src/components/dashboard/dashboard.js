import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
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

  handleNotesList = () => { 
    return (
      <div className="notes">
        {
          this.state.notes.map((note) => {
            return (
              <div key={note._id} className="note-added">
              <h2 className="note-title">{note.title}</h2> 
              
               <p className="note-content">{note.content}</p>
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
      <NoteForm handleAddNote={ this.handleAddNote } />
      {
        this.state.error && <h2 className="error">Please enter a title</h2>
      }
      { this.handleNotesList() }
      </section>
    );
  }
}

// removeNote() here
