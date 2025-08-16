import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <>
            <div className='px-5 md:px-10 lg:px-20 xl:px-30 py-10 lg:py-20 flex flex-col gap-5 md:flex-row items-center justify-between border-t border-t-[--border]' style={{ background: "var(--bg-primary)" }}>
                <div className='w-24 md:w-30'>
                    <img className='object-cover' src={isDark ? "/NameLogoWhite.png" : "/BlackNameLogo.png"} alt="" />
                </div>
                <p className='font-medium text-lg' style={{color:"var(--text-secondary)" }}>Building digital experience that matter</p>
                <p className='text-sm' style={{ color: "var(--text-secondary)" }}>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </>
    )
}

export default Footer