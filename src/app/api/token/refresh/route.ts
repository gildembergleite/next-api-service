import { randomUUID } from 'crypto'

export async function POST(req: Request) {
  const { refresh } = await req.json()

  const response = {
    refresh,
    access: randomUUID(),
  }

  return Response.json(response)
}
