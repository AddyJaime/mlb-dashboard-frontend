"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Home, GitCompareArrows } from "lucide-react"

const navItems = [
  { href: "/", label: "Stadiums", icon: Home },
  { href: "/compare", label: "Compare", icon: GitCompareArrows },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900 leading-none">
              MLB Stadium
            </span>
            <span className="text-xs text-red-600 leading-none mt-1">
              Analytics
            </span>
          </div>
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                  isActive
                    ? "bg-red-100 text-red-600"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}