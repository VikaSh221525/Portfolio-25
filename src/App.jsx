import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import { ThemeProvider } from './context/ThemeContext'
import Aboutme from './components/Aboutme'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Nav/>
        <HeroSection/>
        <Aboutme/>
      </div>
    </ThemeProvider>
  )
}

export default App 