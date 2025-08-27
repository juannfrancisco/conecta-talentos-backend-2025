export class ResponseGeneric<T> {
  private statusCode: number;
  private response: T[];
  private page: number;
  private size: number;

  constructor(statusCode: number, response: T[]) {
    this.response = response;
    this.statusCode = statusCode;
  }
}
