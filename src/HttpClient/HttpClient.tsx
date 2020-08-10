export default class HttpClient {
  public async getFrom<ReturnType = string[]>(
    url: string
  ): Promise<ReturnType> {
    const response = await fetch(url);
    return response.json();
  }
}
