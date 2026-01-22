import { useState, useEffect } from 'react'
import BackgroundAnimation from './components/BackgroundAnimation'
import Hero from './components/Hero'
import StatsCounter from './components/StatsCounter'
import ProfessionalSkills from './components/ProfessionalSkills'
import CareerTimeline from './components/CareerTimeline'
import Certifications from './components/Certifications'
import Education from './components/Education'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      
      <div className="relative z-10">
        <Hero />
        <StatsCounter />
        <ProfessionalSkills />
        <CareerTimeline />
        <Certifications />
        <Education />
        
        {/* Footer */}
        <footer className="py-12 px-4 text-center text-gray-400 border-t border-primary/20">
          <p>© 2024 김정윤. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
