import { randomUUID } from 'crypto'

export async function PATCH(req: Request) {
  const { name, email } = await req.json()

  const response = {
    id: randomUUID(),
    name,
    email,
    message: 'User updated successfully.',
  }

  return Response.json(response)
}
