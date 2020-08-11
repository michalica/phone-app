import React from 'react';
import styled from '@emotion/styled';
import Word from '../../atoms/Word';

export const defaultProps = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    max-width: 500px;
    flex-wrap: wrap;
  `,
  WordComponent: Word,
};

type Props = Readonly<
  typeof defaultProps & {
  words: string[];
}
>;

type Children = (props: Props) => JSX.Element;

const Words = ({ children, ...props }: { children: Children } & Props) =>
  children(props);

Words.defaultProps = {
  ...defaultProps,
  children: ({ words, WordComponent, Wrapper }: Props) => (
    <Wrapper>
      {words.map((word) => (
        <WordComponent key={word}>{word}</WordComponent>
      ))}
    </Wrapper>
  ),
};

export default Words;
