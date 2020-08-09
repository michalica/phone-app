import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Main from '../pages/Main/Main';

describe('assertion tests', () => {
  it('should contain Main', () => {
    const component = shallow(<App />);

    expect(component.find(Main).length).toBe(1);
  });
});
