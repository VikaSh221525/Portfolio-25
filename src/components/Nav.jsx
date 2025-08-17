import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Moon, Sun, Download, Menu, X } from "lucide-react"
import { useTheme } from '../context/ThemeContext'

const Nav = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = ['About', 'Experience', 'Projects', 'Contact'];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className='fixed top-0 left-0 w-full flex items-center justify-between py-5 px-5 md:px-20 z-50'
                style={{
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(var(--bg-primary-rgb), 0.8)',
                    borderBottom: '1px solid var(--border)'
                }}>

                {/* Logo */}
                <div className='w-24 md:w-30'>
                    <img className='object-cover' src={isDark ? "/NameLogoWhite.png" : "/BlackNameLogo.png"} alt="" />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link, index) => (
                        <motion.a
                            key={index}
                            href={`#${link.toLowerCase()}`}
                            className="opacity-70 hover:opacity-100 transition-opacity"
                            style={{ color: 'var(--text-secondary)' }}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            {link}
                        </motion.a>
                    ))}
                </div>

                {/* Desktop Theme Toggle & Download Button */}
                <div className="hidden md:flex items-center space-x-4">
                    <motion.button
                        onClick={toggleTheme}
                        className="bg-gray-200 p-2 rounded-full cursor-pointer"
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)'
                        }}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isDark ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
                    </motion.button>

                    <a href="/Resume.pdf" download onClick={closeMenu}>
                        <button className="resume-button">
                            <Download className='w-4 h-4' />
                            <span>Resume</span>
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-3">
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-full cursor-pointer"
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)'
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isDark ? <Sun className='w-4 h-4' /> : <Moon className='w-4 h-4' />}
                    </motion.button>

                    <motion.button
                        onClick={toggleMenu}
                        className="p-2 rounded-full cursor-pointer"
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)'
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-full h-screen z-40 md:hidden"
                        style={{
                            backgroundColor: 'var(--bg-primary)',
                            paddingTop: '100px'
                        }}
                    >
                        <div className="flex flex-col items-center space-y-8 px-5">
                            {/* Mobile Navigation Links */}
                            {links.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={closeMenu}
                                    className="text-2xl font-medium hover:opacity-70 transition-opacity"
                                    style={{ color: 'var(--text-primary)' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link}
                                </motion.a>
                            ))}

                            {/* Mobile Resume Button */}
                            <motion.button
                                onClick={closeMenu}
                                className="resume-button mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Download className='w-4 h-4' />
                                <span>Resume</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nav