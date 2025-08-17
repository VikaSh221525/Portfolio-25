import React from 'react'
import { motion } from 'motion/react'

const Aboutme = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, x: -100, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.5,
                ease: "backOut"
            }
        }
    }

    return (
        <>
            <motion.section
                id='about'
                className='px-5 md:px-10 lg:px-20 xl:px-30 py-10 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-15'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className='w-full lg:w-[30%] h-64 sm:h-80 md:h-96 lg:h-100 max-w-md mx-auto lg:mx-0'
                    variants={imageVariants}
                >
                    <img className='w-full h-full object-cover rounded-lg' src="/myphoto.jpeg" alt="My Pic" />
                </motion.div>

                <div className='w-full lg:w-[70%] flex flex-col gap-5 text-center lg:text-start' style={{ color: 'var(--text-primary)' }}>
                    <motion.h1
                        className='w-fit text-2xl sm:text-3xl lg:text-5xl font-bold relative mx-auto lg:mx-0'
                        variants={itemVariants}
                    >
                        About me
                        <motion.span
                            className='h-2 absolute -bottom-3 w-[40%] left-1/2 transform -translate-x-1/2'
                            style={{ background: "var(--accent)" }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        />
                    </motion.h1>

                    <motion.p
                        className='text-sm sm:text-base lg:text-lg leading-relaxed'
                        style={{ color: 'var(--text-secondary)' }}
                        variants={itemVariants}
                    >
                        I'm a full-stack developer with expertise in creating modern web applications. I specialize in React,
                        Next.js, and Node.js, with a passion for clean code and exceptional user experiences.
                    </motion.p>

                    <motion.p
                        className='text-sm sm:text-base lg:text-lg leading-relaxed'
                        style={{ color: 'var(--text-secondary)' }}
                        variants={itemVariants}
                    >
                        My approach combines technical expertise with creative problem-solving to deliver projects that not only look great but also perform exceptionally well. I'm constantly exploring new technologies and design trends to stay at the cutting edge of web development.
                    </motion.p>

                    <motion.h1
                        className='text-lg sm:text-xl lg:text-2xl font-bold mt-6'
                        variants={itemVariants}
                    >
                        My Skills
                    </motion.h1>

                    <motion.div
                        className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-7 justify-items-center lg:justify-items-start'
                        variants={containerVariants}
                    >
                        <motion.div
                            className='h-16 w-32 sm:h-18 sm:w-36 md:h-20 md:w-40 shadow-md rounded-lg flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300 outline outline-blue-600'
                            style={{ background: "var(--bg-primary)" }}
                            variants={skillVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="ri-reactjs-line text-2xl sm:text-3xl group-hover:text-blue-600 scale-105"></i>
                            <p className='text-xs sm:text-sm'>React</p>
                        </motion.div>

                        <motion.div
                            className='h-16 w-32 sm:h-18 sm:w-36 md:h-20 md:w-40 shadow-md rounded-lg flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300 outline outline-yellow-300'
                            style={{ background: "var(--bg-primary)" }}
                            variants={skillVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: -5,
                                boxShadow: "0 10px 25px rgba(251, 191, 36, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="ri-javascript-fill text-2xl sm:text-3xl group-hover:text-yellow-400 scale-105"></i>
                            <p className='text-xs sm:text-sm'>JavaScript</p>
                        </motion.div>

                        <motion.div
                            className='h-16 w-32 sm:h-18 sm:w-36 md:h-20 md:w-40 shadow-md rounded-lg flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300 outline outline-green-500'
                            style={{ background: "var(--bg-primary)" }}
                            variants={skillVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="ri-nodejs-line text-2xl sm:text-3xl group-hover:text-green-400 scale-105"></i>
                            <p className='text-xs sm:text-sm'>Node-js</p>
                        </motion.div>

                        <motion.div
                            className='h-16 w-32 sm:h-18 sm:w-36 md:h-20 md:w-40 shadow-md rounded-lg flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300 outline outline-yellow-300'
                            style={{ background: "var(--bg-primary)" }}
                            variants={skillVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: -5,
                                boxShadow: "0 10px 25px rgba(251, 191, 36, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="ri-database-2-fill text-2xl sm:text-3xl group-hover:text-yellow-400 scale-105"></i>
                            <p className='text-xs sm:text-sm'>MongoDB</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

export default Aboutme