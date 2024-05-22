import { Tokens } from '@/@types/tokens'
import { UserData } from '@/@types/user-data'
import { BaseApi } from './base-api'
import { CookiesService } from './cookies-service'

export class AuthApiService extends BaseApi {
  private cookiesService: CookiesService
  private tokens: Tokens
  public userData: UserData | undefined
  public authenticated: boolean

  constructor(baseURL: string, defaultHeaders?: Record<string, string>) {
    super(baseURL, defaultHeaders)
    this.cookiesService = new CookiesService()
    this.tokens = {
      access: '',
      refresh: '',
    }
    this.authenticated = false
  }

  public async login(data: any): Promise<any> {
    const res = await this.post(`/login/`, data)
    this.tokens = res.tokens
    this.cookiesService.setCookie('@refresh-token', this.tokens.refresh)
    this.authenticated = true

    return res
  }

  public async logout(): Promise<any> {
    this.authenticated = false
    this.userData = undefined
    this.cookiesService.resetCookie('@refresh-token')
  }

  private async getUserData() {
    const response = await this.get('/me/', {
      Authorization: `Bearer ${this.tokens.access}`,
    })

    this.userData = response
  }

  public async refreshToken(token: string | undefined): Promise<any> {
    if (token) {
      await this.post('/token/refresh/', {
        refresh: token,
      })
        .then(async (res) => {
          this.tokens.access = res.access
          this.authenticated = true
          this.getUserData()
        })
        .catch(() => {
          this.logout()
        })
    } else {
      this.logout()
    }
    console.log(this.authenticated)
    return this.authenticated
  }
}
