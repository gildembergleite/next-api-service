export class ApiError extends Error {
  public status: number
  public response: Response

  constructor(status: number, message: string, response: Response) {
    super(message)
    this.status = status
    this.response = response
  }
}
