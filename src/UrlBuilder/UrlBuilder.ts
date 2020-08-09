export default class UrlBuilder {
  private url: string = '';

  constructor(hostName: string) {
    this.url = hostName;
  }

  public addPath(path: string): UrlBuilder {
    this.url += `/${path}`;

    return this;
  }

  public withQuery(
    query: { name: string; value: string },
    isFirst: boolean = false
  ): UrlBuilder {
    if (isFirst) {
      this.url += `?${query.name}=${query.value}`;

      return this;
    }

    this.url += `&${query.name}=${query.value}`;
    return this;
  }

  public build(): string {
    return this.url;
  }
}
