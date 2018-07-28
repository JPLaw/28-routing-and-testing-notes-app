import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from '../components/note-form/note-form';

configure({ adapter: new Adapter() });

describe('noteForm testing', () => {
  let mountedNoteForm;

  beforeEach(() => {
    mountedNoteForm = mount(<NoteForm />);
  });

  afterEach(() => {
    mountedNoteForm.unmount();
  });

  test('Simple test for initial state', () => {
    expect(mountedNoteForm.state('title')).toBe('');
    expect(mountedNoteForm.state('content')).toBe('');
  });

  test('Set state works', () => {
    const mockTitle = 'fake title';
    const mockContent = 'fake content';
    
    mountedNoteForm.setState({ 
      title: mockTitle, 
      content: mockContent,
    });

    expect(mountedNoteForm.state('title')).toBe(mockTitle);
    expect(mountedNoteForm.state('content')).toBe(mockContent);
  });
});
