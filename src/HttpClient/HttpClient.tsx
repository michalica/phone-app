export default class HttpClient {
  public async getFrom<ReturnType=unknown>(url: string): Promise<ReturnType> {
    const response = await fetch(url);
    return response.json();
  }
}
