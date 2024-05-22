import { randomUUID } from 'crypto'

export async function GET() {
  const response = {
    id: randomUUID(),
    name: 'User Name',
    email: 'email@example.com',
  }

  return Response.json(response)
}
