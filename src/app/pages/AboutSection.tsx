'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { Card } from '../shared/components/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { aboutData } from '../data/AboutData'

export function AboutSection() {
  const { features, traits, sectionTitle, subheading, bioParagraphs } = aboutData

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const itemsPerPage = isMobile ? 2 : 4
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const totalPages = Math.ceil(features.length / 2)

  const visibleFeatures = Array.from({ length: itemsPerPage }, (_, i) => features[(page * 2 + i) % features.length])

  const navigate = (dir: number) => {
    setDirection(dir)
    setPage(prev => (prev + dir + totalPages) % totalPages)
  }

  const touchStart = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) navigate(diff > 0 ? 1 : -1)
    touchStart.current = null
  }

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">{sectionTitle}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">{subheading}</h3>
            {bioParagraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-300 leading-relaxed">{paragraph}</p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              {!isMobile && (
                <button
                  onClick={() => navigate(-1)}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer shrink-0"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <div
                className="overflow-hidden flex-1 relative min-h-[420px]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                    className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-6 content-start"
                  >
                    {visibleFeatures.map((feature) => (
                      <Card key={feature.title} className="p-6 bg-black/50 border-white/10">
                        <div className="text-emerald-400">
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-white text-lg mb-1">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </Card>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {!isMobile && (
                <button
                  onClick={() => navigate(1)}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer shrink-0"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > page ? 1 : -1); setPage(i) }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === page ? 'bg-emerald-400 w-6' : 'bg-white/30 w-2'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
