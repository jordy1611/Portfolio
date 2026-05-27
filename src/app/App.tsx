import { Navigation } from './pages/Navigation'
import { BottomNav } from './pages/BottomNav'
import { HeroSection } from './pages/LandingSection'
import { AboutSection } from './pages/AboutSection'
import { SkillsSection } from './pages/SkillsSection'
import { ProjectsSection } from './pages/ProjectsSection'
import { ContactSection } from './pages/ContactSection'

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