import { type RequestOptions } from '@/@types/request-options'

export class BaseApi {
  protected baseURL: string
  protected defaultHeaders: Record<string, string>

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = defaultHeaders
  }

  protected async request(
    endpoint: string,
    options: RequestOptions,
  ): Promise<any> {
    const url = `${this.baseURL}${endpoint}`
    const headers = { ...this.defaultHeaders, ...options.headers }

    const response = await fetch(url, {
      method: options.method || 'GET',
      headers,
      body: JSON.stringify(options.body),
    })

    return this.handleResponse(response)
  }

  protected async handleResponse(response: Response): Promise<any> {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  }

  protected get(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<any> {
    return this.request(endpoint, { method: 'GET', headers })
  }

  protected post(
    endpoint: string,
    body: any,
    headers?: Record<string, string>,
  ): Promise<any> {
    return this.request(endpoint, { method: 'POST', headers, body })
  }

  protected patch(
    endpoint: string,
    body: any,
    headers?: Record<string, string>,
  ): Promise<any> {
    return this.request(endpoint, { method: 'PATCH', headers, body })
  }

  protected delete(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<any> {
    return this.request(endpoint, { method: 'DELETE', headers })
  }
}
