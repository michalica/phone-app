import React, { ReactElement } from 'react';
import useSuggestions from '../../hooks/useSuggestions';

type SuggestionsContainer = {
  render(args: {
    suggestions: string[];
    getSuggestions: (value: string) => void;
  }): ReactElement;
};

const SuggestionsContainer = ({ render }: SuggestionsContainer) => {
  const { suggestions, getSuggestions } = useSuggestions();
  return (
    <>
      {render({
        suggestions,
        getSuggestions,
      })}
    </>
  );
};

export default SuggestionsContainer;
