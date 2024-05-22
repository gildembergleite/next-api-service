'use client'

import Link from 'next/link'

export function UsersPageButton() {
  return (
    <Link href={'/users'}>
      <button className="bg-emerald-700 text-white h-10 px-8 rounded-md">
        USERS PAGE
      </button>
    </Link>
  )
}
