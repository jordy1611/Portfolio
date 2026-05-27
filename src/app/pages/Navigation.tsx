'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { Linkedin, Mail } from 'lucide-react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-300 hover:text-white transition-colors duration-200 capitalize text-lg group cursor-pointer"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-[width] duration-300 ease-out origin-left" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300 cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300 cursor-pointer"
            >
              <Mail className="w-5 h-5" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
            <a
              href="#"
              download
              className="h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300 cursor-pointer px-4 text-lg"
            >
              Resumé
            </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}