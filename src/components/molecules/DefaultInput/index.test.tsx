import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DefaultInput from './DefaultInput';

describe('assertion tests', () => {
  it('should write to input', () => {
    const { getByLabelText } = render(<DefaultInput />);
    const input: HTMLInputElement = getByLabelText(
      'numbers'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: '563' } });
    expect(input.value).toBe('563');
  });

  it('call custom on Change', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<DefaultInput onChange={onChange} />);
    const input: HTMLInputElement = getByLabelText(
      'numbers'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: '563' } });
    expect(onChange).toHaveBeenCalled();
  });
});
