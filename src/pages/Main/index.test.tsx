import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import BaseTemplate from '../../templates/BaseTemplate/BaseTemplate';
import SuggestionsContainer from '../../containers/SuggestionsContainer';

describe('smoke test', () => {
  it('should exist', () => {
    expect(shallow(<Main />).exists()).toBe(true);
  });
});

describe('assertion test', () => {
  it('should have Base template', () => {
    expect(shallow(<Main />).find(BaseTemplate).length).toBe(1);
  });

  it('should have SuggestionsContainer', () => {
    expect(
      shallow(<Main />)
        .renderProp('render')()
        .find(SuggestionsContainer).length
    ).toBe(1);
  });

  it('should have WordsContainer', () => {
    expect(
      shallow(<Main />)
        .renderProp('render')()
        .find(SuggestionsContainer)
        .prop('render')({ suggestions: [], getSuggestions: () => undefined })
    ).toMatchInlineSnapshot(
      `
      <WordsContainer
        render={[Function]}
      />
    `
    );
  });
});
