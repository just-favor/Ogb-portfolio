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
        <section id="home" className="hero mt-[70px] overflow-hidden p-0 relative" style={{height: 'calc(80vh - 70px)'}}>

            {/* Mobile: image as full background */}
            <div className="md:hidden absolute inset-0 z-0">
                <img src="/img/bg-re.png" alt="Favour" className="w-full h-full object-cover object-[center_20%]" />
                <div className="absolute inset-0 bg-black/65" />
            </div>

            <div className="w-full h-full md:h-[60vh] md:bg-black/70 relative flex items-center z-10">
                <div className="max-w-[1600px] w-full mx-auto px-10 flex items-center justify-between max-md:flex-col max-md:text-center max-md:justify-center max-md:items-center max-md:h-full">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="max-w-[55%] max-lg:max-w-[60%] max-md:max-w-full max-md:px-4"
                    >
                        <motion.h1
                            variants={item}
                            className="text-6xl max-lg:text-5xl max-md:text-3xl max-sm:text-2xl font-bold leading-tight mb-5 text-gray-100"
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-br from-cyan-500 via-cyan-500 to-indigo-500">
                                {fullText}
                            </span>
                        </motion.h1>

                        <motion.h2
                            variants={item}
                            className="text-3xl max-lg:text-2xl max-md:text-xl font-semibold mb-5 text-transparent bg-clip-text bg-linear-to-br from-cyan-500 to-indigo-500"
                        >
                            Web Developer & Designer
                        </motion.h2>

                        <motion.p
                            variants={item}
                            className="text-lg max-md:text-base mb-8 text-white"
                        >
                            A Frontend Developer (React / Next.js) specializing in modern UI, animations, and user-focused designs.
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="flex gap-4 max-md:justify-center flex-wrap"
                        >
                            <a href="#projects" className="text-white font-semibold flex justify-center items-center px-8 py-2 rounded-full bg-linear-to-br from-cyan-500 to-indigo-600 hover:-translate-y-1 transition-all duration-300">
                                View My Work
                            </a>

                            <a href="#contact" className="inline-block px-8 py-2 rounded-full bg-white/10 font-medium text-white border-2 border-white hover:-translate-y-1 transition-all duration-300">
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-md:hidden absolute right-0 bottom-0"
                    >
                        <img
                            src="/img/bg-re.png"
                            alt="Favour"
                            className="w-[380px] max-lg:w-[280px] object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}