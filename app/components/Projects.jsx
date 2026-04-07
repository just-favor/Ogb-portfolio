"use client";
import ScrollReveal from "./Scrollreveal";


const projects = [
    { img: '/img/unc-comm.png', title: 'Commerce Website', desc: 'A Commerce site built with react that checks out using Whatsapp', tags: ['Tailwind', 'React'], link: 'https://uncle-chuks-site-pms2.vercel.app/' },
    { img: '/img/Screenshot 2026-01-23 at 7.21.33 PM.png', title: 'Sehembztravels', desc: 'Travel booking platform with seamless ticket reservations and planning.', tags: ['Next.js', 'Tailwind', 'React'], link: 'https://sehembztravels.com/' },
    { img: '/img/landingpage.png', title: 'Salient', desc: 'A Responsive Landing page with smooth and seamless scroll animation feel.', tags: ['Next.js', 'Tailwind', 'React'], link: 'https://landingpage-umber-mu.vercel.app' },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-white dark:bg-[#1a1a1a]">
            <ScrollReveal>
            <div className="max-w-[1600px] mx-auto px-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#2d3e50] dark:text-gray-200">
                        My Projects
                    </h2>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] max-md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-sm:grid-cols-1 gap-16 auto-rows-fr">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-100 dark:bg-[#0a0a0a]"
                        >
                            <div className="relative overflow-hidden group">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full group-hover:scale-110 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-[#4a6cf7]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#4a6cf7] text-xl hover:bg-[#2d3e50] hover:text-white transition-all duration-300"
                                    >
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-[#2d3e50] dark:text-gray-200">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-500 dark:text-gray-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </ScrollReveal>
        </section>
    );
}