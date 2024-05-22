'use client'

import { getUsers } from '@/api/users/get-users'

export function GetUsersButton() {
  return (
    <button
      onClick={getUsers}
      className="bg-sky-700 text-white h-10 px-8 rounded-md"
    >
      GET USERS
    </button>
  )
}
