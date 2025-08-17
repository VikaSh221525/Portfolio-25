import { Mail, MapPinHouse, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { useState } from 'react';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const [isLoading, setIsLoading] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const onSubmit = (data) => {
        setIsLoading(true);
        setFormStatus('');

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setFormStatus('Message sent successfully!');
                    reset();
                },
                (error) => {
                    console.log('FAILED...', error);
                    setFormStatus('Failed to send message. Please try again.');
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

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
    return (
        <>
            <motion.section id='contact' className='px-5 md:px-10 lg:px-20 xl:px-30 py-10 lg:py-20 flex flex-col justify-center items-center gap-8 lg:gap-15' variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ color: 'var(--text-primary)' }}
            >
                <motion.h1
                    className='w-fit text-4xl lg:text-6xl font-bold relative mx-auto lg:mx-0'
                    variants={itemVariants}
                >
                    Get In Touch
                    <motion.span
                        className='h-2 absolute -bottom-3 w-[40%] left-1/2 transform -translate-x-1/2'
                        style={{ background: "var(--accent)" }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    />
                </motion.h1>
                <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20">
                    {/* Contact Info */}
                    <div className="flex-1 flex flex-col gap-5">
                        <h1 className="text-2xl font-semibold">Contact Information</h1>
                        <div className="flex gap-5 items-center">
                            <div className="rounded-full p-3 w-fit" style={{ background: "var(--bg-secondary)" }}> <Mail /> </div>
                            <div>
                                <h2 style={{ color: "var(--text-secondary)" }}>Email</h2>
                                <h1 style={{ color: "var(--text-primary)" }}>vikassharma221525@gmail.com</h1>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="rounded-full p-3 w-fit" style={{ background: "var(--bg-secondary)" }}> <Phone /> </div>
                            <div>
                                <h2 style={{ color: "var(--text-secondary)" }}>Phone</h2>
                                <h1 style={{ color: "var(--text-primary)" }}>+91 9315388355</h1>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="rounded-full p-3 w-fit" style={{ background: "var(--bg-secondary)" }}> <MapPinHouse /> </div>
                            <div>
                                <h2 style={{ color: "var(--text-secondary)" }}>Location</h2>
                                <h1 style={{ color: "var(--text-primary)" }}>Burari, Delhi-110084</h1>
                            </div>
                        </div>
                        <h1 className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>Connect</h1>
                        <div className="flex gap-2">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vikash-sharma-8641b033b/" className="github-glow-btn p-3 rounded-full" style={{ background: "var(--bg-secondary)" }}><FaLinkedinIn size={25} /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/VikaSh221525" className="github-glow-btn p-3 rounded-full" style={{ background: "var(--bg-secondary)" }}><FaGithub size={25} /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/its.vikashsharma7?igsh=eXd5MmVuMnU5NGw0" className="github-glow-btn p-3 rounded-full" style={{ background: "var(--bg-secondary)" }}><AiFillInstagram size={25} /></a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full max-w-md bg-[var(--bg-secondary)] rounded-xl shadow-lg p-6">
                            <h1 className="font-semibold text-2xl mb-4" style={{ color: "var(--text-primary)" }}>Send a Message</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                                <div>
                                    <label className="block mb-1 font-medium" htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register("name", { required: "Name is required" })}
                                        className={`w-full px-4 py-2 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-blue-600 transition`}
                                        style={{ borderColor: errors.name ? "#dc2626" : "var(--border)" }}
                                        autoComplete="off"
                                    />
                                    {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        className={`w-full px-4 py-2 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-blue-600 transition`}
                                        style={{ borderColor: errors.email ? "#dc2626" : "var(--border)" }}
                                        autoComplete="off"
                                    />
                                    {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium" htmlFor="subject">Subject</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        {...register("subject", { required: "Subject is required" })}
                                        className={`w-full px-4 py-2 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-blue-600 transition`}
                                        style={{ borderColor: errors.subject ? "#dc2626" : "var(--border)" }}
                                        autoComplete="off"
                                    />
                                    {errors.subject && <span className="text-red-600 text-sm">{errors.subject.message}</span>}
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        {...register("message", { required: "Message is required" })}
                                        className={`w-full px-4 py-2 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none`}
                                        style={{ borderColor: errors.message ? "#dc2626" : "var(--border)" }}
                                        autoComplete="off"
                                    />
                                    {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="mt-2 px-6 py-2 rounded-lg font-semibold bg-[var(--accent)] text-white hover:bg-blue-700 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>
                                {formStatus && (
                                    <p className={`text-center text-sm ${formStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                                        {formStatus}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

            </motion.section>
        </>
    )
}

export default Contact