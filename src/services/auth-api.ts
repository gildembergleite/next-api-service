import { AuthApiService } from '@/entities/auth-api-service'
import { env } from '@/env'

export const authApi = new AuthApiService(env.NEXT_PUBLIC_API_BASE_URL)
