import { motion } from 'motion/react'
import React from 'react'

const Projects = () => {
    const featuredprojects = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60",
            title: "E-Commerce Platform",
            description: "A modern e-commerce platform with a minimalist design approach, focusing on user experience and conversion optimization.",
            techstack: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
            title: "Fitness Tracking App",
            description: "A mobile application that helps users track their fitness progress, set goals, and maintain healthy habits.",
            techstack: ["React Native", "Firebase", "Redux"]
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
            title: "Analytics Dashboard",
            description: "A comprehensive analytics dashboard that visualizes complex data in an intuitive and accessible manner.",
            techstack: ["Vue.js", "D3.js", "Express"]
        },
    ]
    return (
        <>
            <section className='w-full px-5 md:px-10 lg:px-20 xl:px-30 py-10 lg:py-20 flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col gap-10 items-center'>
                    <h1 className='w-fit text-4xl md:text-5xl font-bold relative' style={{ color: "var(--text-primary)" }}>
                        Featured Projects
                        <motion.span
                            className='h-2 absolute -bottom-4 w-[40%] left-1/2 transform -translate-x-1/2'
                            style={{ background: "var(--accent)" }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        ></motion.span>
                    </h1>
                    <p>A selection of my recent work. Each project represents unique challenges and solutions.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center mt-16 w-full max-w-7xl'>
                    {featuredprojects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href="#" // You can replace this with your actual link
                            className='group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-sm cursor-pointer'
                            style={{ backgroundColor: "var(--bg-secondary)" }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <div className='relative overflow-hidden h-48'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>

                            <div className='p-6'>
                                <h3 className='project-title text-xl font-bold mb-3 transition-colors duration-300' style={{ color: "var(--text-primary)" }}>
                                    {project.title}
                                </h3>
                                <p className='text-sm leading-relaxed mb-4 line-clamp-3' style={{ color: "var(--text-secondary)" }}>
                                    {project.description}
                                </p>

                                <div className='flex flex-wrap gap-2'>
                                    {project.techstack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='tech-tag px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 group-hover:scale-105'
                                            style={{
                                                backgroundColor: "var(--border)",
                                                color: "var(--text-secondary)",
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Projects