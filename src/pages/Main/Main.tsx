import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate/BaseTemplate';
import Phone from '../../components/organizms/Phone';
import WordsContainer from '../../containers/WordsContainer';
import SuggestionsContainer from '../../containers/SuggestionsContainer';

const Main = () => {
  return (
    <BaseTemplate
      render={() => (
        <SuggestionsContainer
          render={({ suggestions, getSuggestions }) => (
            <WordsContainer
              render={({ words, getWords }) => {
                return (
                  <>
                    <Phone
                      onType={(newValue: string) => {
                        getWords(newValue);
                        getSuggestions(newValue);
                      }}
                      suggestions={suggestions}
                      words={words}
                    />
                  </>
                );
              }}
            />
          )}
        />
      )}
    />
  );
};

export default Main;
