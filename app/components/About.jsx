'use client';
import { motion } from "framer-motion";

const skills = [
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-react', name: 'Next.js' },
    { icon: null, name: 'Tailwind', svg: true },
    { icon: 'fas fa-project-diagram', name: 'GraphQL' },
    { icon: 'fas fa-code', name: 'TypeScript' },
];

const TailwindIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0,0,256,256">
        <g fill="currentColor" fillRule="nonzero"><g transform="scale(5.33333,5.33333)"><path d="M24,9.604c-6.4,0 -10.4,3.199 -12,9.597c2.4,-3.199 5.2,-4.398 8.4,-3.599c1.826,0.456 3.131,1.781 4.576,3.247c2.352,2.387 5.075,5.151 11.024,5.151c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.6c-1.825,-0.456 -3.13,-1.781 -4.575,-3.247c-2.353,-2.388 -5.077,-5.151 -11.025,-5.151zM12,24c-6.4,0 -10.4,3.199 -12,9.598c2.4,-3.199 5.2,-4.399 8.4,-3.599c1.825,0.457 3.13,1.781 4.575,3.246c2.353,2.388 5.077,5.152 11.025,5.152c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.599c-1.826,-0.456 -3.131,-1.781 -4.576,-3.246c-2.352,-2.388 -5.075,-5.152 -11.024,-5.152z"></path></g></g>
    </svg>
);

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
                        <motion.h3 variants={item} className="text-3xl font-semibold mb-4 text-[#2d3e50] dark:text-gray-200 max-md:text-center">
                        </motion.h3>

                        <motion.p variants={item} className="mb-5 text-gray-500 dark:text-gray-400">
                            I'm Favour, a passionate Frontend Developer with 2+ years of experience building modern, high-performance web applications 
                            using React and Next.js. Specialized in crafting visually engaging interfaces, smooth animations, and 
                            intuitive user experiences.
                        </motion.p>

                        <motion.h3 variants={item} className="text-3xl font-semibold mb-4 text-[#2d3e50] dark:text-gray-200 max-md:text-center">
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

                        {/* Skills */}
                        <motion.div variants={item}>
                            <h3 className="text-xl font-semibold mb-4 text-[#2d3e50] dark:text-gray-200 max-md:text-center">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-3 max-md:justify-center">
                                {skills.map(skill => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#4a6cf7]/30 bg-[#4a6cf7]/10 text-[#4a6cf7] dark:text-indigo-300 dark:border-indigo-400/30 dark:bg-indigo-500/10 text-sm font-medium hover:-translate-y-1 transition-transform duration-300"
                                    >
                                        {skill.svg ? <TailwindIcon /> : <i className={`${skill.icon} text-base`}></i>}
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}