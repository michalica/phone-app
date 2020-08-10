import React from 'react';
import { render } from '@testing-library/react';
import Phone from './Phone';

describe('snapshot tests', () => {
  it('testing rendered tree', () => {
    const { container } = render(<Phone suggestions={[]} words={[]} />);
    expect(container).toMatchSnapshot();
  });

  it('testing rendered tree', () => {
    const { getByText, getByLabelText } = render(
      <Phone suggestions={['suggestion value']} words={['words value']} />
    );
    expect(getByText('suggestion value')).toBeInTheDocument();
    expect(getByText('words value')).toBeInTheDocument();
    expect(getByLabelText('numbers')).toBeInTheDocument();
  });
});
