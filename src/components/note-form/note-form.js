import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  content: '',
  completed: false,
  editing: false,
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note ? props.note : defaultState;
    }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonText = this.props.note ? 'Update Note' : 'Create Note';
    const title = this.props.note ? 'updateTitle' : 'title';
    const content = this.props.note ? 'updateContent' : 'content';
    return (
      <div className="note-list">
        <label>Add a new note</label>
        <form onSubmit={ this.handleSubmit } data-cy="note-form">
          <input 
            type="text"
            name="title"
            placeholder="title"
            value={ this.state.title }
            onChange={ this.handleChange }
            data-cy= {title}
          />
          <label>About your note</label>
          <input
            type="text"
            name="content"
            placeholder="details"
            value={this.state.content}
            onChange={this.handleChange }
            data-cy= {content}
          />
        <button type="submit" data-cy="note-form-submit">{buttonText}</button> 
      </form>
    </div>
    );
  }
}

NoteForm.propTypes = {
  handleComplete: PropTypes.func,
  handleRemoveNote: PropTypes.func,
  note: PropTypes.object,
};
