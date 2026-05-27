'use client'

import { motion } from 'motion/react'
import { Card } from '../shared/components/card'
import { Button } from '../shared/components/button'
import { Input } from '../shared/components/input'
import { Textarea } from '../shared/components/textarea'
import { Mail, MapPin, Linkedin, Send, Copy, ExternalLink, Plane, FileText, Download } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: FileText,
      label: 'Resumé',
      value: 'Download my resumé',
      href: '#'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'jordan.shryock@email.com',
      href: 'mailto:jordan.shryock@email.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jordanshryock',
      href: 'https://linkedin.com/in/jordanshryock'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ]

return (
    <section id="contact" className="pt-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-last lg:order-first"
          >
            <Card className="p-8 bg-gray-900/50 border-white/10">
              <h3 className="text-2xl text-white mb-3">Reach Out!</h3>
              <form className="space-y-6">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                  <Input
                    placeholder="Project discussion"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-full cursor-pointer flex items-center justify-center gap-2">
                  Connect <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full"
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm currently available for freelance work and full-time opportunities.
              Whether you have a project in mind or just want to chat about technology,
              I'd love to hear from you.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-[14px] bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                  {info.label === 'Resumé' && (
                    <Download className="w-4 h-4 text-emerald-400" />
                  )}
                  {info.label === 'Email' && (
                    <button
                      type="button"
                      onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText(info.value) }}
                      className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 cursor-pointer"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  )}
                  {info.label === 'LinkedIn' && (
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                  )}
                  {info.label === 'Location' && (
                    <Plane className="w-4 h-4 text-emerald-400" />
                  )}
                </motion.a>
              ))}
            </div>

          </motion.div>
        </div>

      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/10 mt-16 overflow-hidden w-full"
      >
        <p className="text-gray-400 leading-relaxed text-center">
          ©2026. Designed and implemented with love by Jordan Shryock and Claude.
        </p>
      </motion.div>
    </section>
  )
}