import React from 'react';
import { render } from '@testing-library/react';
import Words from './Words';

describe('assertion tests', () => {
  it('should list words', () => {
    const words = ['test', 'hey'];
    const { getByText } = render(<Words words={words} />);

    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('hey')).toBeInTheDocument();
  });
});
