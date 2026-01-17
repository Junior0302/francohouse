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

export function MobileMenu() {
  const pathname = usePathname()

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-card z-50 pb-4">
      <nav className="flex items-center justify-around h-16 px-2 pb-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-6 w-6", isActive && "fill-current/20")} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
