"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* LOGO */}
        <Link href="/" className="font-bold text-lg">
          MLB Stadium
        </Link>

        {/* NAV */}
        <nav className="flex gap-6 text-sm">
          <Link
            href="/"
            className={pathname === "/" ? "text-blue-500 font-semibold" : "text-gray-500"}
          >
            Stadiums
          </Link>

          <Link
            href="/compare"
            className={pathname === "/compare" ? "text-red-500 font-semibold" : "text-gray-500"}
          >
            Compare
          </Link>
        </nav>

      </div>
    </header>
  )
}