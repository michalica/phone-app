import UrlBuilder from './UrlBuilder';

describe('assertion test', () => {
  it('should have host', () => {
    const urlBuilder = new UrlBuilder('host');
    expect(urlBuilder.build()).toEqual('host');
  });
  it('should have path', () => {
    const urlBuilder = new UrlBuilder('host');
    expect(urlBuilder.addPath('words').build()).toEqual('host/words');
  });
  it('should have path adn query', () => {
    const urlBuilder = new UrlBuilder('host');
    expect(
      urlBuilder
        .addPath('words')
        .withQuery({ name: 'digits', value: '1234' }, true)
        .build()
    ).toEqual('host/words?digits=1234');
  });
  it('should have path and 2 queries', () => {
    const urlBuilder = new UrlBuilder('host');
    expect(
      urlBuilder
        .addPath('words')
        .withQuery({ name: 'digits', value: '1234' }, true)
        .withQuery({ name: 'second', value: '23' })
        .build()
    ).toEqual('host/words?digits=1234&second=23');
  });
});
