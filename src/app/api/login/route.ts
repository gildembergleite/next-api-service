import { randomUUID } from 'crypto'

export async function POST(req: Request) {
  const { email } = await req.json()

  const response = {
    email,
    tokens: {
      refresh: randomUUID(),
      access: randomUUID(),
    },
  }

  return Response.json(response)
}
