import React from 'react'
import { motion } from "motion/react"
import { Moon, Sun, Download } from "lucide-react"
import { useTheme } from '../context/ThemeContext'

const Nav = () => {
    const { isDark, toggleTheme } = useTheme();
    const links = ['About', 'Experience', 'Projects', 'Contact'];

    return (
        <>
            <div className='fixed top-0 left-0 w-full flex items-center justify-between py-5 px-20 z-50'
                style={{
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(var(--bg-primary-rgb), 0.8)',
                    borderBottom: '1px solid var(--border)'
                }}>

                {/* Logo */}
                <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Portfolio
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link, index) => (
                        <motion.a
                            key={index}
                            href={`#${link.toLowerCase()}`}
                            className="hover:opacity-70 transition-opacity"
                            style={{ color: 'var(--text-secondary)' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {link}
                        </motion.a>
                    ))}
                </div>

                {/* Theme Toggle & Download Button */}
                <div className="flex items-center space-x-4">
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:opacity-70 transition-opacity"
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)'
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>

                    <motion.button
                        className="flex items-center space-x-2 px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                        style={{
                            backgroundColor: 'var(--accent)',
                            color: 'white'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={16} />
                        <span>Resume</span>
                    </motion.button>
                </div>
            </div>
        </>
    )
}

export default Nav