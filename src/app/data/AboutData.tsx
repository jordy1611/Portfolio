import { Code, Coffee, Lightbulb, Users, Zap, BookOpen, Target, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export const aboutData = {
  sectionTitle: "About Me",
  subheading: "Passionate about creating digital experiences that matter",
  bioParagraphs: [
    "With over 5 years of experience in web development, I've had the privilege of working with startups and established companies to bring their digital visions to life. My journey began with a curiosity about how websites work, and it has evolved into a passion for creating seamless, performant applications.",
    "I specialize in React, Node.js, and modern JavaScript frameworks, but I'm always eager to learn new technologies that can help me build better solutions. When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest in web technologies.",
  ],
  traits: ['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'],
  features: [
    { icon: Code,      title: 'Clean Code',         description: 'Writing maintainable, scalable, and efficient code that stands the test of time.' },
    { icon: Lightbulb, title: 'Innovation',          description: 'Always exploring new technologies and creative solutions to complex problems.' },
    { icon: Users,     title: 'Collaboration',       description: 'Working effectively with teams to deliver exceptional user experiences.' },
    { icon: Coffee,    title: 'Dedication',          description: 'Committed to continuous learning and staying current with industry trends.' },
    { icon: Zap,       title: 'Performance',         description: 'Obsessed with speed — optimizing every layer from database queries to render cycles.' },
    { icon: Shield,    title: 'Reliability',         description: 'Building robust, well-tested systems that hold up under real-world conditions.' },
    { icon: BookOpen,  title: 'Continuous Learning', description: 'Constantly expanding my skill set through courses, books, and hands-on experimentation.' },
    { icon: Target,    title: 'User Focus',          description: 'Keeping end-users at the center of every design and engineering decision.' },
  ] as Feature[],
}
