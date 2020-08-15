import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import Phone from './Phone';

describe('snapshot testing', () => {
  it('testing rendered tree', () => {
    const { container } = render(<Phone suggestions={[]} words={[]} />);
    expect(container).toMatchSnapshot();
  });
});

describe('assertion tests', () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(
      <Phone suggestions={['suggestion value']} words={['words value']} />
    );
  });
  it('has suggestion values and input', () => {
    const { getByText, getByLabelText } = utils;

    expect(getByText('suggestion value')).toBeInTheDocument();
    expect(getByLabelText('numbers')).toBeInTheDocument();
  });
  it('has suggestion values and input', () => {
    const { container } = utils;
    const buttons = container.querySelectorAll('button');

    expect(buttons.length).toBe(9);
  });
  it('click button change input value', () => {
    const { getByText, getByLabelText } = utils;

    const button = getByText('2') as HTMLButtonElement;
    const input: HTMLInputElement = getByLabelText(
      'numbers'
    ) as HTMLInputElement;

    fireEvent.click(button);

    expect(input.value).toBe('2');
  });

  describe('testing default functions', () => {
    it('value from getRandomColor should have correct length', () => {
      const color = Phone.defaultProps.getRandomColor();

      expect(color.length).toBe(7);
    });
    it('value from getRandomColor should start with #', () => {
      const color = Phone.defaultProps.getRandomColor();

      expect(color.split('')[0]).toBe('#');
    });
    it('add should call correct functionms', () => {
      const setValue = jest.fn();
      const onType = jest.fn();
      const setColor = jest.fn();
      const getRandomColor = jest.fn(() => '#cdcdcd');

      Phone.defaultProps.add('2', {
        value: '3',
        setValue,
        setColor,
        onType,
        getRandomColor,
      });

      expect(setValue).toHaveBeenLastCalledWith('32');
      expect(onType).toHaveBeenLastCalledWith('32');
      expect(getRandomColor).toHaveBeenCalled();
      expect(setColor).toHaveBeenCalledWith('#cdcdcd');
    });
  });
});
