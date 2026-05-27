'use client'

import { Home, User, Zap, FolderOpen, Mail } from 'lucide-react'

const navItems = [
  { id: 'home',     icon: Home,       label: 'Home' },
  { id: 'about',    icon: User,       label: 'About' },
  { id: 'skills',   icon: Zap,        label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'contact',  icon: Mail,       label: 'Connect' },
]

export function BottomNav() {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
      <div className="flex items-center justify-around px-2 py-4">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer w-12"
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </div>
    </nav>
  )
}
