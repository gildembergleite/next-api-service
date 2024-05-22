export class CookiesService {
  private doc: Document | undefined

  constructor() {
    if (typeof document !== 'undefined') {
      this.doc = document
    }
  }

  public async getToken(tokenName: string) {
    if (this.doc) {
      const cookies = this.doc.cookie.split(';')
      let token: string | undefined

      cookies?.forEach((cookie) => {
        const [name, value] = cookie.trim().split('=')
        if (name === tokenName) {
          token = value
        }
      })

      return token
    } else {
      console.error('Could not get token')
    }
  }

  public setCookie(name: string, value: string) {
    if (this.doc) {
      this.doc.cookie = `${name}=${value}; path=/`
    } else {
      console.error('Could not set cookie')
    }
  }

  public resetCookie(name: string) {
    if (this.doc) {
      this.doc.cookie =
        name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    } else {
      console.error('Could not reset cookie')
    }
  }
}
