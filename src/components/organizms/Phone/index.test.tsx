import React from 'react';
import { render } from '@testing-library/react';
import Phone from './Phone';

describe('snapshot tests', () => {
  it('testing rendered tree', () => {
    const { container } = render(<Phone />);
    expect(container).toMatchSnapshot();
  });
});
