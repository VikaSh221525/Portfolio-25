import React from 'react'
import { useTheme } from '../context/ThemeContext'

const HeroSection = () => {
    const { isDark } = useTheme();

    return (
        <>
            <div className='w-full h-screen relative' style={{ backgroundColor: 'var(--bg-primary)' }}>
                <video
                    autoPlay
                    muted
                    src={isDark ? "/AnimatedVideo.mp4" : "/HeroWhite.mp4"}
                    className='w-full lg:w-3/6 absoluteCenter outline-none'
                    key={isDark ? 'dark-video' : 'light-video'}
                />
            </div>
        </>
    )
}

export default HeroSection