import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('smoke test', () => {
  it('should exist', () => {
    expect(shallow(<Main />).exists()).toBe(true);
  });
});
