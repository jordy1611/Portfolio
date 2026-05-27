import { Navigation } from './components/Navigation'
import { BottomNav } from './components/BottomNav'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'

export default function App() {
  return (
    <div className="dark bg-black text-white">
      <Navigation />
      <BottomNav />
      {/* Hero is fixed — stays in place as content scrolls over it */}
      <div className="fixed inset-0 z-0">
        <HeroSection />
      </div>
      {/* Spacer pushes scrollable content below the viewport */}
      <div className="h-screen" />
      <main className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}