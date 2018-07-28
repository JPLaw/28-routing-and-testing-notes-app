import React from 'react';
import PropTypes from 'prop-types';
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
  }
}     

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
};
