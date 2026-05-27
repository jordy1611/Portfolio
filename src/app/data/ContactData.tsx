import { Mail, MapPin, Linkedin, Copy, ExternalLink, Plane, FileText, Download } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ContactInfoItem = {
  icon: LucideIcon
  label: string
  value: string
  href: string
  actionIcon: LucideIcon
  copyable?: boolean
}

export const contactData = {
  sectionTitle: "Get In Touch",
  formHeading: "Reach Out!",
  introText: "I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.",
  form: {
    namePlaceholder: "Your name",
    nameLabel: "Name",
    emailLabel: "Email",
    emailPlaceholder: "your.email@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Project discussion",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    submitLabel: "Connect",
  },
  contactInfo: [
    {
      icon: FileText,
      label: 'Resumé',
      value: 'Download my resumé',
      href: '#',
      actionIcon: Download,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'jordan.shryock@email.com',
      href: 'mailto:jordan.shryock@email.com',
      actionIcon: Copy,
      copyable: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jordanshryock',
      href: 'https://linkedin.com/in/jordanshryock',
      actionIcon: ExternalLink,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      actionIcon: Plane,
    },
  ] as ContactInfoItem[],
}
