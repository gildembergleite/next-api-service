import { usersApi } from '@/services/users-api'

export async function postUser() {
  const response = await usersApi.createUser({
    name: 'João',
    email: 'email',
    password: '123',
  })
  return response
}
