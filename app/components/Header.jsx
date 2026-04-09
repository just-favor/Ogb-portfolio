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
        <>
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 shadow-md ${sticky ? 'py-2 backdrop-blur-md bg-black/40 shadow-black/20' : 'py-4 bg-white shadow-black/10'}`}>
            <div className="max-w-[1600px] mx-auto px-10 flex items-center relative">
                <div className="logo">
                    <h1 className={`text-3xl font-bold transition-colors duration-300 ${sticky ? 'text-white' : 'text-[#2d3e50]'}`}>Portfolio</h1>
                </div>

                {/* Hamburger */}
                <div className={`md:hidden text-2xl cursor-pointer ml-auto transition-colors duration-300 ${sticky ? 'text-white' : 'text-[#2d3e50]'}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex md:items-center ml-auto">
                    <ul className="flex flex-row">
                        {navItems.map(item => (
                            <li key={item} className="ml-8">
                                <a
                                    href={`#${item}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={`nav-link relative block py-2 text-base font-medium transition-colors duration-300 hover:text-[#4a6cf7] ${activeSection === item ? 'active text-[#4a6cf7]' : sticky ? 'text-white' : 'text-[#333]'}`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>

        {/* Mobile Sidebar — outside header to avoid z-index stacking context */}
        <div
            className={`md:hidden fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setMenuOpen(false)}
        />
        <nav
            className={`md:hidden fixed top-0 right-0 h-full w-[70%] max-w-[300px] z-[9999] flex flex-col pt-20 px-6 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ backdropFilter: 'blur(24px)', backgroundColor: 'rgba(8,8,20,0.80)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
        >
            <ul className="flex flex-col w-full">
                {navItems.map(item => (
                    <li key={item} className="w-full border-b border-white/10">
                        <a
                            href={`#${item}`}
                            onClick={(e) => handleNavClick(e, item)}
                            className={`block py-4 text-lg font-medium transition-colors duration-300 hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-white/80'}`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    );
}
