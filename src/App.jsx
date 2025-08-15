import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Nav/>
        <HeroSection/>
      </div>
    </ThemeProvider>
  )
}

export default App 