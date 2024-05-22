'use client'

import { patchUser } from '@/api/users/patch-user'
import { useRouter } from 'next/navigation'

export function UpdateUserButton({ userId }: { userId: string | undefined }) {
  const { refresh } = useRouter()

  async function handleUpdateUser() {
    if (userId) {
      await patchUser(userId)
    } else {
      refresh()
    }
  }

  return (
    <button
      onClick={handleUpdateUser}
      className="bg-sky-700 text-white h-10 px-8 rounded-md"
    >
      UPDATED USER
    </button>
  )
}
