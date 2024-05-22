import { UsersApiService } from '@/entities/users-api-service'
import { env } from '@/env'

export const usersApi = new UsersApiService(env.NEXT_PUBLIC_API_BASE_URL)
