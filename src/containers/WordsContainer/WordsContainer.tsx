import React, { ReactElement } from 'react';
import useWords from '../../hooks/useWords';

type WordsContainer = {
  render(args: {
    words: string[];
    getWords: (value: string) => void;
  }): ReactElement;
};

const WordsContainer = ({ render }: WordsContainer) => {
  const { words, getWords } = useWords();

  return (
    <>
      {render({
        words,
        getWords,
      })}
    </>
  );
};

export default WordsContainer;
