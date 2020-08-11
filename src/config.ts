export const config = {
  host:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://stormy-mesa-36693.herokuapp.com',
  suggestions: 'suggestions',
  words: 'words',
};
