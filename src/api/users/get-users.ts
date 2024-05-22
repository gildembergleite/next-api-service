import { usersApi } from '@/services/users-api'

export async function getUsers() {
  const response = await usersApi.getUsers()
  return response
}
