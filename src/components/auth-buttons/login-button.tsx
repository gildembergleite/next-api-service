'use client'

import { authApi } from '@/services/auth-api'
import { useRouter } from 'next/navigation'

export function LoginButton() {
  const router = useRouter()

  async function handleLogin() {
    const res = await authApi.login({
      email: 'user@example.com',
      password: 'root1234',
    })
    if (res) {
      router.push('/auth')
    }
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-sky-700 text-white h-10 px-8 rounded-md"
    >
      LOGIN
    </button>
  )
}
