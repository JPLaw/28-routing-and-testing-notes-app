import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;
  beforeEach(() => {
    mountedDashboard = mount(<Dashboard />);
  });

  afterEach(() => {
    mountedDashboard.unmount();
  });

  test('Simple test for initial state', () => {
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('Adding a new note to the state', () => {
    const mockNote = { 
      _id: '1234',
      title: 'fake', 
      content: 'This is my new note', 
    };
    mountedDashboard.setState({ notes: mockNote });
    const savedNote = mountedDashboard.state('notes')[0];
    expect(mockNote._id).toBe(savedNote._id);
    expect(mockNote.title).toBe(savedNote.title);
    expect(mockNote.content).toBe(savedNote.content);
  });
});
