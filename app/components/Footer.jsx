export default function Footer() {
    const socials = [
        { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/ogbewe-favour-11740a367/' },
        { icon: 'fab fa-github', href: 'https://github.com/just-favor' },
        { icon: 'fab fa-twitter', href: 'https://x.com/vivas_favor23' },
        { icon: 'fab fa-instagram', href: 'https://www.instagram.com/just__favor/' },
    ];

    return (
        <footer className="bg-[#2d3e50] text-white pt-20 pb-8">
            <div className="max-w-[1600px] mx-auto px-10">
                <div className="flex justify-between items-center flex-wrap gap-8 mb-12 max-md:flex-col max-md:text-center">
                    <h2 className="text-3xl font-bold">Portfolio</h2>
                    <ul className="flex gap-5 max-md:justify-center">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
                            <li key={item}>
                                <a href={`#${item}`} className="text-white hover:text-[#4a6cf7] transition-colors duration-300">
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 max-md:justify-center">
                        {socials.map(s => (
                            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#4a6cf7] hover:to-[#6a3ef7] hover:-translate-y-1 transition-all duration-300">
                                <i className={s.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-white/10">
                    <p className="text-sm text-white/70">&quot;A man&apos;s future is built by his own efforts&quot;</p>
                </div>
            </div>
        </footer>
    );
}
