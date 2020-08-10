import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import HttpClient from '../../HttpClient/HttpClient';
import { config } from '../../config';
import UrlBuilder from '../../UrlBuilder/UrlBuilder';

const useWords = (httpClient: HttpClient = new HttpClient()) => {
  const [words, setWords] = useState<string[]>([]);

  const [value, setValue] = useState('');
  const [searchValue] = useDebounce(value, 500);

  const getWords = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const url = new UrlBuilder(config.host)
      .addPath('words')
      .withQuery({ name: 'digits', value: searchValue }, true)
      .build();

    const fetch = () => {
      const result = httpClient.getFrom<{ words: string[] }>(url);
      result.then((res) => {
        setWords(res.words);
      });
    };

    fetch();
  }, [searchValue]);

  return {
    words,
    getWords,
  };
};

export default useWords;
