import React from 'react';
import styled from '@emotion/styled';
import Suggestion from '../../atoms/Suggestion';

export const defaultProps = {
  Wrapper: styled.div``,
  SuggestionComponent: Suggestion,
};

type Props = Readonly<
  typeof defaultProps & {
  suggestions: string[];
}
>;

type Children = (props: Props) => JSX.Element;

const Suggestions = ({ children, ...props }: { children: Children } & Props) =>
  children(props);

Suggestions.defaultProps = {
  ...defaultProps,
  children: ({ suggestions, SuggestionComponent }: Props) =>
    suggestions.map((sug) => (
      <SuggestionComponent key={sug}>{sug}</SuggestionComponent>
    )),
};

export default Suggestions;
