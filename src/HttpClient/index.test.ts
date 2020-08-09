import fetchMock from 'fetch-mock';
import HttpClient from './HttpClient';

describe('assertion test', () => {
  beforeEach(() => {
    fetchMock.getOnce('localhost/', {
      body: {
        test: 'test',
      },
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });
  it('should call get response', async () => {
    const httpClient = new HttpClient();
    expect(await httpClient.getFrom('localhost/')).toEqual({
      test: 'test',
    });
  });
});
