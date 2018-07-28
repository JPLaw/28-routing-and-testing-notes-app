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
      <div>
      <li className="note-item">
        <strong>{title}: </strong>
        <b>
        {content}
        </b>
        <button 
          type="submit" 
          onClick={ this.handleClick }
        >Remove Note</button>
      </li>
      </div>
    );
  }
}     

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
};
