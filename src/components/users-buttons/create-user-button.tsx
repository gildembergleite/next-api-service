'use client'

import { postUser } from '@/api/users/post-user'

export function CreateUserButton() {
  return (
    <button
      onClick={postUser}
      className="bg-sky-700 text-white h-10 px-8 rounded-md"
    >
      CREATE USER
    </button>
  )
}
