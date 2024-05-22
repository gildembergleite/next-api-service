import { AuthPageButton } from '@/components/routing-buttons/auth-page-button'
import { CreateUserButton } from '@/components/users-buttons/create-user-button'
import { GetUsersButton } from '@/components/users-buttons/get-users-button'
import { UpdateUserButton } from '@/components/users-buttons/updated-user-button'
import { authApi } from '@/services/auth-api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function UsersPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('@refresh-token')
  await authApi.refreshToken(token?.value).then((res) => {
    if (!res) {
      redirect('/')
    }
  })

  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center bg-zinc-900 gap-6">
      <div className="text-white text-center space-y-2">
        <h1 className="text-4xl">Users Page</h1>
        <p className="text-xl">ApiService Example</p>
      </div>
      <div className="flex flex-col gap-2">
        <AuthPageButton />
        <UpdateUserButton userId={authApi.userData?.id} />
        <GetUsersButton />
        <CreateUserButton />
      </div>
    </main>
  )
}
