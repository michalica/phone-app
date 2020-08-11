import React from 'react';
import styled from '@emotion/styled';
import Suggestion from '../../atoms/Suggestion';

export const defaultProps = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  SuggestionComponent: styled(Suggestion)`
    margin-bottom: 3px;
  `,
};

type Props = Readonly<
  typeof defaultProps & {
  suggestions: string[];
  numberOfSuggestions?: number;
}
>;

type Children = (props: Props) => JSX.Element;

const Suggestions = ({ children, ...props }: { children: Children } & Props) =>
  children(props);

Suggestions.defaultProps = {
  ...defaultProps,
  children: ({
    suggestions,
    SuggestionComponent,
    Wrapper,
    numberOfSuggestions,
  }: Props) => (
    <Wrapper>
      {suggestions
        .map((sug) => (
          <SuggestionComponent key={sug}>{sug}</SuggestionComponent>
        ))
        .slice(0, numberOfSuggestions)}
    </Wrapper>
  ),
};

export default Suggestions;
