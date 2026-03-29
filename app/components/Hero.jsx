'use client';
import { motion } from "framer-motion";

export default function Hero() {
    const fullText = "Favour";

    // Animation variants
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.35,
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

    return (
        <section id="home" className="hero mt-[70px] overflow-hidden p-0">
            <div className="w-full h-full pt-[150px] pb-[100px] bg-black/50 relative">
                <div className="max-w-[1600px] mx-auto px-10 flex items-center justify-between max-md:flex-col max-md:text-center">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex-1 pr-12 max-md:pr-0 max-md:mb-12"
                    >
                        {/* H1 without typing */}
                        <motion.h1
                            variants={item}
                            className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold leading-tight mb-5 text-gray-100"
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-cyan-400">
                                {fullText}
                            </span>
                        </motion.h1>

                        <motion.h2
                            variants={item}
                            className="text-3xl max-lg:text-2xl font-semibold mb-5 text-cyan-400"
                        >
                            Web Developer & Designer
                        </motion.h2>

                        <motion.p
                            variants={item}
                            className="text-lg mb-8 text-white"
                        >
                            A Frontend Developer (React / Next.js) specializing in modern UI, animations, and user-focused design
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="flex gap-4 max-md:justify-center"
                        >
                            <a href="#projects" className="inline-block px-8 py-2 rounded-full font-medium bg-cyan-400 text-black hover:-translate-y-1 transition-all duration-300">
                                View My Work
                            </a>

                            <a href="#contact" className="inline-block px-8 py-2 rounded-full font-medium text-white border-2 border-white hover:-translate-y-1 transition-all duration-300">
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>

                    <div className="flex-1 text-center"></div>
                </div>
            </div>
        </section>
    );
}