'use client'

import { authApi } from '@/services/auth-api'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await authApi.logout()
    router.replace('/')
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-sky-700 text-white h-10 px-8 rounded-md"
    >
      LOGOUT
    </button>
  )
}
