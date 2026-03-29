'use client';
import { motion } from "framer-motion";

export default function About() {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const imageVariant = {
        hidden: {
            opacity: 0,
            x: -80,
            filter: "blur(10px)",
        },
        show: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="about" className="py-16 bg-white dark:bg-[#1a1a1a]">
            <div className="max-w-[1600px] mx-auto px-10">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-[#2d3e50] dark:text-gray-200">
                        About Me
                    </h2>
                </motion.div>

                <div className="flex items-center gap-12 max-md:flex-col">

                    {/* Image */}
                    <motion.div
                        variants={imageVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex-1"
                    >
                        <img
                            src="/img/about.jpeg"
                            alt="About Me"
                            className="rounded-xl shadow-lg max-h-[600px] object-cover w-full"
                        />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex-1"
                    >
                        <motion.h3 variants={item} className="text-3xl font-semibold mb-4 text-[#2d3e50] dark:text-gray-200">
                            Who I Am
                        </motion.h3>

                        <motion.p variants={item} className="mb-5 text-gray-500 dark:text-gray-400">
                            I'm Favour, a passionate Frontend Developer with 2+ years of experience building modern, high-performance web applications 
                            using React and Next.js. Specialized in crafting visually engaging interfaces, smooth animations, and 
                            intuitive user experiences.
                        </motion.p>

                        <motion.h3 variants={item} className="text-3xl font-semibold mb-4 text-[#2d3e50] dark:text-gray-200">
                            My Journey
                        </motion.h3>

                        <motion.p variants={item} className="mb-5 text-gray-500 dark:text-gray-400">
                            My journey in web development started when I was in college, where I discovered my passion for coding and design.
                        </motion.p>

                        <motion.div
                            variants={container}
                            className="grid grid-cols-2 max-md:grid-cols-1 gap-4 my-8"
                        >
                            {[
                                { title: 'Name:', value: 'Ogbewe Favour' },
                                { title: 'Email:', value: 'vivasfavor@gmail.com' },
                                { title: 'Location:', value: 'Port Harcourt, Nigeria' },
                                { title: 'Availability:', value: 'Available for Freelance' },
                            ].map((info) => (
                                <motion.div
                                    key={info.title}
                                    variants={item}
                                    className="flex items-center"
                                >
                                    <span className="font-semibold mr-2 text-[#2d3e50] dark:text-gray-200">
                                        {info.title}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400">
                                        {info.value}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}