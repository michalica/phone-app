export const config = {
  host: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
  suggestions: 'suggestions',
  words: 'words',
};
