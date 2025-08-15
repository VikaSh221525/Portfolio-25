import React, { useEffect } from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import { ThemeProvider } from './context/ThemeContext'
import Aboutme from './components/Aboutme'
import Lenis from 'lenis'
import Experience from './components/Experience'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

  })
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Nav/>
        <HeroSection/>
        <Aboutme/>
        <Experience/>
      </div>
    </ThemeProvider>
  )
}

export default App 