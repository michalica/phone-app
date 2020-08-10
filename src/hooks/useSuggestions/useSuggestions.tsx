import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import HttpClient from '../../HttpClient/HttpClient';
import { config } from '../../config';
import UrlBuilder from '../../UrlBuilder/UrlBuilder';

const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [value, setValue] = useState('');
  const [searchValue] = useDebounce(value, 500);

  const getSuggestions = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const httpClient = new HttpClient();
    const url = new UrlBuilder(config.host)
      .addPath('suggestions')
      .withQuery({ name: 'digits', value: searchValue }, true)
      .build();

    const fetch = async () => {
      const result = await httpClient.getFrom<{ suggestions: string[] }>(url);
      setSuggestions(result.suggestions);
    };

    fetch();
  }, [searchValue]);

  return {
    suggestions,
    getSuggestions,
  };
};

export default useSuggestions;
