'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { Card } from '../shared/components/card'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { projectsData } from '../data/ProjectsData'
import type { AnyProject, FeaturedProject } from '../data/ProjectsData'

export function ProjectsSection() {
  const { sectionTitle, sectionSubtitle, otherProjectsTitle, modalLabels, featuredProjects, otherProjects } = projectsData

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => { setIsMobile(e.matches); setPage(0); setOtherPage(0) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const featuredPerPage = isMobile ? 1 : 2
  const otherPerPage = isMobile ? 1 : 3

  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const totalPages = isMobile ? featuredProjects.length : Math.ceil(featuredProjects.length / 2)

  const [otherPage, setOtherPage] = useState(0)
  const [otherDirection, setOtherDirection] = useState(1)
  const otherTotalPages = isMobile ? otherProjects.length : Math.ceil(otherProjects.length / 3)

  const [selectedProject, setSelectedProject] = useState<AnyProject | null>(null)

  const visibleProjects = featuredProjects.slice(page * featuredPerPage, page * featuredPerPage + featuredPerPage)

  const navigate = (dir: number) => {
    setDirection(dir)
    setPage(prev => (prev + dir + totalPages) % totalPages)
  }

  const navigateOther = (dir: number) => {
    setOtherDirection(dir)
    setOtherPage(prev => (prev + dir + otherTotalPages) % otherTotalPages)
  }

  // Touch handling for featured carousel
  const featuredTouchStart = useRef<number | null>(null)
  const handleFeaturedTouchStart = (e: React.TouchEvent) => { featuredTouchStart.current = e.touches[0].clientX }
  const handleFeaturedTouchEnd = (e: React.TouchEvent) => {
    if (featuredTouchStart.current === null) return
    const diff = featuredTouchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) navigate(diff > 0 ? 1 : -1)
    featuredTouchStart.current = null
  }

  // Touch handling for other projects carousel
  const otherTouchStart = useRef<number | null>(null)
  const handleOtherTouchStart = (e: React.TouchEvent) => { otherTouchStart.current = e.touches[0].clientX }
  const handleOtherTouchEnd = (e: React.TouchEvent) => {
    if (otherTouchStart.current === null) return
    const diff = otherTouchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) navigateOther(diff > 0 ? 1 : -1)
    otherTouchStart.current = null
  }

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  const isFeatured = (p: AnyProject): p is FeaturedProject => 'highlights' in p

  const ProjectCard = ({ project }: { project: FeaturedProject }) => (
    <Card
      className="bg-gray-900/50 border-white/10 overflow-hidden border-l-[3px] border-l-emerald-500 cursor-pointer h-full"
      onClick={() => setSelectedProject(project)}
    >
      <div className="p-6 flex flex-col h-full gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-white">{project.title}</h3>
          <p className="text-xs text-gray-500">{project.year} · {project.role}</p>
        </div>
        <p className="text-gray-400 leading-relaxed flex-1">{project.description}</p>
        <ul className="space-y-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-emerald-400 mt-0.5">▸</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="border-t border-white/10 pt-4 flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )

  return (
    <section id="projects" className="py-20 bg-gradient-to-tl from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">{sectionTitle}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">{sectionSubtitle}</p>
        </motion.div>

        {/* Featured carousel */}
        <div className="flex items-center gap-4 mb-4">
          {!isMobile && (
            <button onClick={() => navigate(-1)} className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer shrink-0">
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          <div className="overflow-hidden flex-1" onTouchStart={handleFeaturedTouchStart} onTouchEnd={handleFeaturedTouchEnd}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {!isMobile && (
            <button onClick={() => navigate(1)} className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer shrink-0">
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
        </div>

        {/* Page dots */}
        <div className="flex flex-col items-center mb-16">
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

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">{otherProjectsTitle}</h3>
        </motion.div>

        <div className="flex items-center gap-4">
          {!isMobile && (
            <button onClick={() => navigateOther(-1)} className="text-white/70 hover:text-white transition-colors cursor-pointer shrink-0">
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          <div className="overflow-hidden flex-1" onTouchStart={handleOtherTouchStart} onTouchEnd={handleOtherTouchEnd}>
            <AnimatePresence mode="wait" custom={otherDirection}>
              <motion.div
                key={otherPage}
                custom={otherDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid md:grid-cols-3 gap-6"
              >
                {otherProjects.slice(otherPage * otherPerPage, otherPage * otherPerPage + otherPerPage).map((project) => (
                  <Card
                    key={project.title}
                    className="bg-gray-900/50 border-white/10 border-l-[3px] border-l-gray-700 h-full cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="p-4 flex flex-col h-full gap-4">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-lg text-white">{project.title}</h4>
                        <p className="text-xs text-gray-500">{project.year} · {project.role}</p>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
                      <div className="border-t border-white/10 pt-4 flex flex-wrap gap-1 mt-auto">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {!isMobile && (
            <button onClick={() => navigateOther(1)} className="text-white/70 hover:text-white transition-colors cursor-pointer shrink-0">
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
        </div>

        <div className="flex flex-col items-center mt-6 mb-6">
          <div className="flex justify-center gap-2">
            {Array.from({ length: otherTotalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setOtherDirection(i > otherPage ? 1 : -1); setOtherPage(i) }}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === otherPage ? 'bg-emerald-400 w-6' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-gray-900 border border-white/10 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`sticky top-0 bg-gray-900 border-b border-white/10 px-6 py-4 flex items-start justify-between gap-4 ${isFeatured(selectedProject) ? 'border-l-[3px] border-l-emerald-500' : 'border-l-[3px] border-l-gray-700'}`}>
                <div>
                  <h2 className="text-2xl text-white">{selectedProject.title}</h2>
                  <p className="text-xs text-gray-500 mt-1">{selectedProject.year} · {selectedProject.role}</p>
                </div>
                <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0 mt-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-6 flex flex-col gap-6">
                <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
                <p className="text-gray-400 leading-relaxed">{selectedProject.modalBody1}</p>
                <p className="text-gray-400 leading-relaxed">{selectedProject.modalBody2}</p>

                {/* Highlights */}
                <div>
                  <h4 className="text-white mb-3">{modalLabels.highlights}</h4>
                  <ul className="space-y-2">
                    {selectedProject.modalHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-emerald-400 mt-0.5">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech skills */}
                <div>
                  <h4 className="text-white mb-3">{modalLabels.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-sm border ${isFeatured(selectedProject) ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-gray-700 text-gray-300 border-transparent'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft skills */}
                <div>
                  <h4 className="text-white mb-3">{modalLabels.skillsDemonstrated}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.modalSkills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
