import React from 'react'
import { motion } from 'motion/react'

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 0.6
            }
        }
    }

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const experienceItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    }

    const timelineVariants = {
        hidden: { scaleY: 0 },
        visible: {
            scaleY: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    const dotVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4
            }
        }
    }

    const tagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    return (
        <>
            <motion.div
                id="experience"
                className='py-16 px-6 md:px-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.div
                    className='w-full text-center flex justify-center mb-16'
                    variants={titleVariants}
                >
                    <h1 className='w-fit text-4xl md:text-5xl font-bold relative' style={{ color: "var(--text-primary)" }}>
                        Work Experience
                        <motion.span
                            className='h-2 absolute -bottom-4 w-[40%] left-1/2 transform -translate-x-1/2'
                            style={{ background: "var(--accent)" }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        ></motion.span>
                    </h1>
                </motion.div>
                <div className='flex flex-col gap-12 max-w-6xl mx-auto'>
                    <motion.div
                        className='flex flex-row gap-6 md:gap-8'
                        variants={experienceItemVariants}
                    >
                        <motion.div
                            className='md:w-48 flex-shrink-0'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className='hidden md:block text-lg font-semibold' style={{ color: "var(--text-secondary)" }}>June, 2025 - present</h1>
                        </motion.div>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <motion.div
                                className='w-7 h-7 rounded-full'
                                style={{ backgroundColor: "var(--accent)" }}
                                variants={dotVariants}
                            ></motion.div>
                            <motion.div
                                className='w-1 h-60 md:h-40 mt-1'
                                style={{ backgroundColor: "var(--accent)", originY: 0 }}
                                variants={timelineVariants}
                            ></motion.div>
                        </div>
                        <motion.div
                            className='flex flex-col gap-3 flex-1'
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h1 className='text-2xl font-semibold' style={{ color: "var(--text-primary)" }}>Frontend Developer</h1>
                            <p className='text-lg font-medium' style={{ color: "var(--accent)" }}>Printedge India</p>
                            <p className='block md:hidden text font-medium' style={{ color: "var(--text-secondary)" }}>June, 2025 - present</p>
                            <p className='leading-relaxed' style={{ color: "var(--text-secondary)" }}>Led the development of responsive web applications using React and Javascript. Collaborated with designers to implement pixel-perfect interfaces and optimize user experience.</p>
                            <motion.div
                                className='flex flex-wrap gap-2 mt-4'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.6
                                        }
                                    }
                                }}
                            >
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>React</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>JavaScript</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>Tailwind CSS</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>Cursor AI</motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='flex flex-row gap-6 md:gap-8'
                        variants={experienceItemVariants}
                    >
                        <motion.div
                            className='md:w-48 flex-shrink-0'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className='hidden md:block text-lg font-semibold' style={{ color: "var(--text-secondary)" }}>Lorem, 2024 - Lorem</h1>
                        </motion.div>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <motion.div
                                className='w-7 h-7 rounded-full'
                                style={{ backgroundColor: "var(--accent)" }}
                                variants={dotVariants}
                            ></motion.div>
                            <motion.div
                                className='w-1 h-60 md:h-40 mt-2'
                                style={{ backgroundColor: "var(--accent)", originY: 0 }}
                                variants={timelineVariants}
                            ></motion.div>
                        </div>
                        <motion.div
                            className='flex flex-col gap-3 flex-1'
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h1 className='text-2xl font-semibold' style={{ color: "var(--text-primary)" }}> Developer</h1>
                            <p className='text-lg font-medium' style={{ color: "var(--accent)" }}>Something soon</p>
                            <p className='block md:hidden text font-medium' style={{ color: "var(--text-secondary)" }}>Lorem, 2024 - Lorem</p>
                            <p className='leading-relaxed' style={{ color: "var(--text-secondary)" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur maxime dignissimos nulla suscipit recusandae sapiente hic aliquid unde mollitia. </p>
                            <motion.div
                                className='flex flex-wrap gap-2 mt-4'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.6
                                        }
                                    }
                                }}
                            >
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>Node.js</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>MongoDB</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>Express.js</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>React</motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='flex flex-row gap-6 md:gap-8'
                        variants={experienceItemVariants}
                    >
                        <motion.div
                            className='md:w-48 flex-shrink-0'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className='hidden md:block text-lg font-semibold' style={{ color: "var(--text-secondary)" }}>Lorem, 2026 - Lorem</h1>
                        </motion.div>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <motion.div
                                className='w-7 h-7 rounded-full'
                                style={{ backgroundColor: "var(--accent)" }}
                                variants={dotVariants}
                            ></motion.div>
                            <motion.div
                                className='w-1 h-60 md:h-40 mt-2'
                                style={{ backgroundColor: "var(--accent)", originY: 0 }}
                                variants={timelineVariants}
                            ></motion.div>
                        </div>
                        <motion.div
                            className='flex flex-col gap-3 flex-1'
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h1 className='text-2xl font-semibold' style={{ color: "var(--text-primary)" }}> Developer</h1>
                            <p className='text-lg font-medium' style={{ color: "var(--accent)" }}>Something soon</p>
                            <p className='block md:hidden text font-medium' style={{ color: "var(--text-secondary)" }}>Lorem, 2024 - Lorem</p>
                            <p className='leading-relaxed' style={{ color: "var(--text-secondary)" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores minima magnam error explicabo dolorem fuga quod dicta. Reiciendis, exercitationem? </p>
                            <motion.div
                                className='flex flex-wrap gap-2 mt-4'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.6
                                        }
                                    }
                                }}
                            >
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>HTML/CSS</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>JavaScript</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>Git</motion.span>
                                <motion.span className='px-3 py-1 rounded-full text-sm font-medium border' style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }} variants={tagVariants}>Figma</motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default Experience