'use client';
import { useState, useEffect } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
            ['home', 'about', 'skills', 'projects', 'contact'].forEach(id => {
                const section = document.querySelector(`#${id}`);
                if (!section) return;
                const top = section.offsetTop - 100;
                if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
                    setActiveSection(id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', menuOpen);
    }, [menuOpen]);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(`#${id}`);
        if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    };

    const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 shadow-md ${sticky ? 'py-2 backdrop-blur-md bg-black/40 shadow-black/20' : 'py-4 bg-white shadow-black/10'}`}>
            <div className="max-w-[1600px] mx-auto px-10 flex items-center relative">
                <div className="logo">
                    <h1 className={`text-3xl font-bold transition-colors duration-300 ${sticky ? 'text-white' : 'text-[#2d3e50]'}`}>Portfolio</h1>
                </div>

                {/* Hamburger */}
                <div className={`md:hidden text-2xl cursor-pointer z-[1001] ml-auto transition-colors duration-300 ${sticky ? 'text-white' : 'text-[#2d3e50]'}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {/* Nav */}
                <nav className={`
                    md:flex md:items-center ml-auto
                    fixed md:static top-[70px] left-0 w-full md:w-auto h-[calc(100vh-70px)] md:h-auto
                    bg-white md:bg-transparent
                    flex-col md:flex-row items-center justify-start md:justify-center pt-12 md:pt-0
                    transition-all duration-300 shadow-md md:shadow-none overflow-y-auto
                    ${menuOpen ? 'left-0 flex' : 'left-[-100%] hidden md:flex'}
                `}>
                    <ul className="flex flex-col md:flex-row w-full md:w-auto">
                        {navItems.map(item => (
                            <li key={item} className="md:ml-8 w-full md:w-auto text-center">
                                <a
                                    href={`#${item}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={`nav-link relative block py-4 md:py-2 text-lg md:text-base font-medium transition-colors duration-300 hover:text-[#4a6cf7] ${activeSection === item ? 'active text-[#4a6cf7]' : sticky ? 'text-white' : 'text-[#333]'}`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
