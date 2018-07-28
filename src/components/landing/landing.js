import React from 'react';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
      <h3>Welcome to your To Do List! </h3>
        <p>This is a great way to keep track of everything you need to do. <b>You can add notes, edit or update them, and remove them as you complete the tasks.</b>
      Go ahead and write a few notes for yourself!</p>
      </div>
    );
  }
}
