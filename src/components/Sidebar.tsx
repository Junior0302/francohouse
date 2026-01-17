"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Wifi, LayoutDashboard, BarChart3, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Wi-Fi", href: "/wifi", icon: Wifi },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Stats", href: "/stats", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex h-screen w-64 flex-col border-r border-border bg-card text-card-foreground fixed left-0 top-0">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold tracking-tight">Francohouse</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          v1.0.0
        </p>
      </div>
    </div>
  )
}
