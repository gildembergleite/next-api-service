import { LoginButton } from '@/components/auth-buttons/login-button'
import { authApi } from '@/services/auth-api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export default async function Home() {
  const cookieStore = cookies()
  const token = cookieStore.get('@refresh-token')
  await authApi.refreshToken(token?.value).then((res) => {
    if (res) {
      redirect('/auth')
    }
  })

  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center bg-zinc-900 gap-6">
      <div className="text-white text-center space-y-2">
        <h1 className="text-4xl">Hello, world!</h1>
        <p className="text-xl">ApiService Example</p>
      </div>
      <div className="flex flex-col gap-2">
        <LoginButton />
      </div>
    </main>
  )
}
