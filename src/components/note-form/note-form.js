import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  content: '',
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="note-list">
        <label>Add a new note</label>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="text"
            name="title"
            placeholder="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
          <label>About your note</label>
          <input
            type="text"
            name="content"
            placeholder="details"
            value={this.state.content}
            onChange={this.handleChange }
          />
        <button type="submit">Create Note</button>
      </form>
    </div>
    );
  }
}

NoteForm.propTypes = {
  handleAddNote: PropTypes.func,
  handleRemoveNote: PropTypes.func,
};
