import React from 'react';
import { render } from '@testing-library/react';
import BaseTemplate from './BaseTemplate';

describe('assertion test', () => {
  it('should render Text', () => {
    const { getByText } = render(
      <BaseTemplate render={() => <div>Test content</div>} />
    );
    expect(getByText('Test content')).toBeInTheDocument();
  });
});
