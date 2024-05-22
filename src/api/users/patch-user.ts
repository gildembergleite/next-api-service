import { usersApi } from '@/services/users-api'

export async function patchUser(userId: string) {
  const response = await usersApi.updateUser(userId, {
    name: 'João',
    email: 'email',
    password: '123',
  })
  return response
}
