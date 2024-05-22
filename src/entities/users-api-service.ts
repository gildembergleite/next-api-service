import { BaseApi } from './base-api'

export class UsersApiService extends BaseApi {
  // eslint-disable-next-line no-useless-constructor
  constructor(baseURL: string, defaultHeaders?: Record<string, string>) {
    super(baseURL, defaultHeaders)
  }

  public async getUsers(): Promise<any> {
    return this.get(`/users`)
  }

  public async createUser(data: any): Promise<any> {
    return this.post('/users', data)
  }

  public async updateUser(userId: string, data: any): Promise<any> {
    return this.patch(`/users/${userId}`, data)
  }

  public async deleteUser(userId: string): Promise<any> {
    return this.delete(`/users/${userId}`)
  }
}
