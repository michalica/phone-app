import React from 'react';
import { render } from '@testing-library/react';
import Suggestions from './Suggestions';

describe('assertion tests', () => {
  it('should list words', () => {
    const suggestions = ['test', 'hey'];
    const { getByText } = render(<Suggestions suggestions={suggestions} />);

    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('hey')).toBeInTheDocument();
  });
});
