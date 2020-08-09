import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import BaseTemplate from '../../templates/BaseTemplate/BaseTemplate';
import Phone from '../../components/organizms/Phone';

describe('smoke test', () => {
  it('should exist', () => {
    expect(shallow(<Main />).exists()).toBe(true);
  });
});

describe('assertion test', () => {
  it('should have Base template', () => {
    expect(shallow(<Main />).find(BaseTemplate).length).toBe(1);
  });

  it('should have Phone component', () => {
    expect(
      shallow(<Main />)
        .renderProp('render')()
        .find(Phone).length
    ).toBe(1);
  });
});
