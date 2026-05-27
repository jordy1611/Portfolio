'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users, Zap, BookOpen, Target, ChevronLeft, ChevronRight, Shield } from 'lucide-react'

export function AboutSection() {
  const features = [
    { icon: Code,      title: 'Clean Code',        description: 'Writing maintainable, scalable, and efficient code that stands the test of time.' },
    { icon: Lightbulb, title: 'Innovation',         description: 'Always exploring new technologies and creative solutions to complex problems.' },
    { icon: Users,     title: 'Collaboration',      description: 'Working effectively with teams to deliver exceptional user experiences.' },
    { icon: Coffee,    title: 'Dedication',         description: 'Committed to continuous learning and staying current with industry trends.' },
    { icon: Zap,       title: 'Performance',        description: 'Obsessed with speed — optimizing every layer from database queries to render cycles.' },
    { icon: Shield,    title: 'Reliability',        description: 'Building robust, well-tested systems that hold up under real-world conditions.' },
    { icon: BookOpen,  title: 'Continuous Learning',description: 'Constantly expanding my skill set through courses, books, and hands-on experimentation.' },
    { icon: Target,    title: 'User Focus',         description: 'Keeping end-users at the center of every design and engineering decision.' },
  ]

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
  const totalPages = 4 // 8 items, shift by 2

  const visibleFeatures = Array.from({ length: itemsPerPage }, (_, i) => features[(page * 2 + i) % 8])

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
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
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
          <h2 className="text-4xl md:text-5xl text-white mb-6">About Me</h2>
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
            <h3 className="text-2xl text-white mb-4">
              Passionate about creating digital experiences that matter
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working with
              startups and established companies to bring their digital visions to life. My journey began
              with a curiosity about how websites work, and it has evolved into a passion for creating
              seamless, performant applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in React, Node.js, and modern JavaScript frameworks, but I'm always eager to
              learn new technologies that can help me build better solutions. When I'm not coding, you'll
              find me contributing to open-source projects, writing technical articles, or exploring the
              latest in web technologies.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait) => (
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
                className="overflow-hidden flex-1"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {visibleFeatures.map((feature) => (
                      <Card key={feature.title} className="p-6 bg-black/50 border-white/10">
                        <div className="text-emerald-400 mb-4">
                          <feature.icon className="w-8 h-8" />
                        </div>
                        <h4 className="text-white text-lg mb-2">{feature.title}</h4>
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
