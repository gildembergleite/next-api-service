import { randomUUID } from 'crypto'

export async function GET() {
  const response = ['João', 'Maria', 'Bob']
  return Response.json(response)
}

export async function POST(req: Request) {
  const { name, email } = await req.json()

  const response = {
    id: randomUUID(),
    name,
    email,
  }

  return Response.json(response)
}

export async function PATCH(req: Request) {
  const { name, email } = await req.json()

  return Response.json({ name, email, message: 'User updated successfully.' })
}
