import React from 'react';
import styled from '@emotion/styled';
import Word from '../../atoms/Word';

export const defaultProps = {
  Wrapper: styled.div``,
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
  children: ({ words, WordComponent }: Props) =>
    words.map((word) => <WordComponent key={word}>{word}</WordComponent>),
};

export default Words;
