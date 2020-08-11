import React from 'react';
import styled from '@emotion/styled';
import BaseTemplate from '../../templates/BaseTemplate/BaseTemplate';
import Phone from '../../components/organizms/Phone';
import WordsContainer from '../../containers/WordsContainer';
import SuggestionsContainer from '../../containers/SuggestionsContainer';
import Words from '../../components/molecules/Words/Words';
import Suggestions from '../../components/molecules/Suggestions';

const SuggestionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 500px;
  flex-wrap: wrap;
`;

const NoMessageWrapper = styled.div`
  font-style: italic;
  font-size: 8;
  color: #cdcdcd;
`;

const Main = () => {
  const getLastWord = (sentence: string): string => {
    const words = sentence.split(' ');
    return words[words.length - 1];
  };

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
                        getWords(getLastWord(newValue));
                        getSuggestions(getLastWord(newValue));
                      }}
                      suggestions={suggestions}
                      words={words}
                    />
                    <br />
                    <div>All combinations:</div>
                    {words.length === 0 ? (
                      <NoMessageWrapper>No combinations</NoMessageWrapper>
                    ) : (
                      <Words words={words} />
                    )}
                    <br />
                    <div>All suggestions:</div>
                    {suggestions.length === 0 ? (
                      <NoMessageWrapper>No suggestions</NoMessageWrapper>
                    ) : (
                      <Suggestions
                        suggestions={suggestions}
                        Wrapper={SuggestionsWrapper}
                      />
                    )}
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
