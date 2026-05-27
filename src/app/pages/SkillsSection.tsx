'use client'

import { motion } from 'motion/react'
import { Card } from '../shared/components/card'
import { skillsData } from '../data/SkillsData'

export function SkillsSection() {
  const { sectionTitle, sectionSubtitle, categories } = skillsData

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">{sectionTitle}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">{sectionSubtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gray-900/50 border-white/10 backdrop-blur-sm h-full">
                <h3 className="text-lg tracking-widest text-gray-400 uppercase mb-5">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1.5 rounded-md text-sm border transition-colors duration-200 ${
                        skill.featured
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
