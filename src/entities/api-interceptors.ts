import { RequestOptions } from '@/@types/request-options'
import { BaseApi } from './base-api'

type Interceptor = (options: RequestOptions) => RequestOptions

export class ApiInterceptors extends BaseApi {
  private requestInterceptors: Interceptor[] = []
  private responseInterceptors: Interceptor[] = []

  // eslint-disable-next-line no-useless-constructor
  constructor(baseURL: string, defaultHeaders?: Record<string, string>) {
    super(baseURL, defaultHeaders)
  }

  public addRequestInterceptor(interceptor: Interceptor): void {
    this.requestInterceptors.push(interceptor)
  }

  public addResponseInterceptor(interceptor: Interceptor): void {
    this.responseInterceptors.push(interceptor)
  }

  private applyInterceptors(
    interceptors: Interceptor[],
    options: RequestOptions,
  ): RequestOptions {
    return interceptors.reduce(
      (opts, interceptor) => interceptor(opts),
      options,
    )
  }

  protected async request(
    endpoint: string,
    options: RequestOptions,
  ): Promise<any> {
    const modifiedOptions = this.applyInterceptors(
      this.requestInterceptors,
      options,
    )
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: modifiedOptions.method || 'GET',
      headers: { ...this.defaultHeaders, ...modifiedOptions.headers },
      body: JSON.stringify(modifiedOptions.body),
    })

    let modifiedResponse = await this.handleResponse(response)
    modifiedResponse = this.applyInterceptors(
      this.responseInterceptors,
      modifiedResponse,
    )
    return modifiedResponse
  }
}
