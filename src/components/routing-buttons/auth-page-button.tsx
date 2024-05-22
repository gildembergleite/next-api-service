'use client'

import Link from 'next/link'

export function AuthPageButton() {
  return (
    <Link href={'/auth'} className="w-full">
      <button className="bg-emerald-700 text-white w-full h-10 px-8 rounded-md">
        AUTH PAGE
      </button>
    </Link>
  )
}
