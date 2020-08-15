import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import DefaultInput from '../../molecules/DefaultInput';
import Suggestions from '../../molecules/Suggestions';
import Words from '../../molecules/Words';
import Button from '../../atoms/Button';

export const defaultProps = {
  Wrapper: styled.div`
    border: 2px solid #00a991;
    max-width: 300px;
    height: 400px;
    border-radius: 20px;
    background: ${(props) => props.color};
  `,
  Display: styled.div`
    border: 1px solid #cdcdcd;
    margin: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
  `,
  SuggestionsWrapper: styled.div`
    height: 120px;
    margin-top: 10px;
  `,
  WordsWrapper: styled.div`
    height: 100px;
    display: flex;
  `,
  Row: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,
  Keyboard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Speaker: styled.div`
    border: 2px solid black;
    width: 20px;
    margin: 0px auto;
    margin-top: 10px;
  `,
  Input: DefaultInput,
  SuggestionComponent: Suggestions,
  WordsComponent: Words,
};

type Props = Readonly<
  typeof defaultProps & {
  suggestions: string[];
  words: string[];
  onType?(newValue: string): void;
  value?: string;
  setValue?: (value: string) => void;
  color?: string;
  setColor?: (value: string) => void;
  add?: (addValue: string, props: Partial<Props>) => void;
  getRandomColor?: () => string;
}
>;
type Children = (props: Props) => JSX.Element;

const Phone = ({ children, ...props }: { children: Children } & Props) => {
  const [value, setValue] = useState('');
  const [color, setColor] = useState('white');

  return children({ color, setColor, value, setValue, ...props });
};

Phone.defaultProps = {
  ...defaultProps,
  getRandomColor: (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  add: (
    addValue: string,
    { value, setValue, onType, setColor, getRandomColor }: Partial<Props>
  ): void => {
    setValue!(`${value + addValue}`);
    onType?.(`${value + addValue}`);
    setColor!(getRandomColor!());
  },
  children: ({
    Wrapper,
    Input,
    onType,
    SuggestionComponent,
    suggestions,
    SuggestionsWrapper,
    Display,
    Keyboard,
    Row,
    setValue,
    value,
    Speaker,
    add,
    getRandomColor,
    setColor,
    color,
  }: Props) => (
    <Wrapper color={color}>
      <Speaker />
      <Display>
        <>
          <div>
            Try <b>236</b>:
          </div>
          <SuggestionsWrapper>
            <SuggestionComponent
              suggestions={suggestions}
              numberOfSuggestions={3}
            />
          </SuggestionsWrapper>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const eValue = e.target.value;
              setValue?.(eValue);
              onType?.(eValue);
              setColor?.(getRandomColor!());
            }}
            value={value}
          />
        </>
      </Display>

      <Keyboard>
        <Row>
          <Button disabled>1</Button>
          <Button
            onClick={() =>
              add!('2', { value, onType, setValue, setColor, getRandomColor })}
          >
            2
          </Button>
          <Button
            onClick={() =>
              add!('3', { value, onType, setValue, setColor, getRandomColor })}
          >
            3
          </Button>
        </Row>
        <Row>
          <Button
            onClick={() =>
              add!('4', { value, onType, setValue, setColor, getRandomColor })}
          >
            4
          </Button>
          <Button
            onClick={() =>
              add!('5', { value, onType, setValue, setColor, getRandomColor })}
          >
            5
          </Button>
          <Button
            onClick={() =>
              add!('6', { value, onType, setValue, setColor, getRandomColor })}
          >
            6
          </Button>
        </Row>
        <Row>
          <Button
            onClick={() =>
              add!('7', { value, onType, setValue, setColor, getRandomColor })}
          >
            7
          </Button>
          <Button
            onClick={() =>
              add!('8', { value, onType, setValue, setColor, getRandomColor })}
          >
            8
          </Button>
          <Button
            onClick={() =>
              add!('9', { value, onType, setValue, setColor, getRandomColor })}
          >
            9
          </Button>
        </Row>
      </Keyboard>
    </Wrapper>
  ),
};

export default Phone;
