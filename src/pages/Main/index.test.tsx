import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import BaseTemplate from '../../templates/BaseTemplate/BaseTemplate';

describe('smoke test', () => {
  it('should exist', () => {
    expect(shallow(<Main />).exists()).toBe(true);
  });
});

describe('assertion test', () => {
  it('should exist', () => {
    expect(shallow(<Main />).find(BaseTemplate).length).toBe(1);
  });
});
