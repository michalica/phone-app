import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import DefaultInput from '../../molecules/DefaultInput';
import Suggestions from '../../molecules/Suggestions';
import Words from '../../molecules/Words';

export const defaultProps = {
  Wrapper: styled.div``,
  Input: DefaultInput,
  SuggestionComponent: Suggestions,
  WordsComponent: Words,
};

type Props = Readonly<
  typeof defaultProps & {
  suggestions: string[];
  words: string[];
  onType?(newValue: string): void;
}
>;
type Children = (props: Props) => JSX.Element;

const Phone = ({ children, ...props }: { children: Children } & Props) => {
  return children(props);
};

Phone.defaultProps = {
  ...defaultProps,
  children: ({
    Wrapper,
    Input,
    onType,
    SuggestionComponent,
    WordsComponent,
    words,
    suggestions,
  }: Props) => (
    <Wrapper>
      <>
        <WordsComponent words={words} />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>, { setValue }) => {
            const { value } = e.target;
            setValue?.(value);
            onType?.(value);
          }}
        />
        <SuggestionComponent suggestions={suggestions} />
      </>
    </Wrapper>
  ),
};

export default Phone;
