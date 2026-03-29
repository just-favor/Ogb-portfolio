export default function Contact() {
    const contactItems = [
        { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'Port Harcourt' },
        { icon: 'fas fa-envelope', title: 'Email', value: 'vivasfavor@gmail.com' },
        { icon: 'fas fa-phone', title: 'Phone', value: '+234 805 5003 497' },
    ];

    const socials = [
        { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/ogbewe-favour-11740a367/' },
        { icon: 'fab fa-github', href: 'https://github.com/just-favor' },
        { icon: 'fab fa-twitter', href: 'https://x.com/vivas_favor23' },
        { icon: 'fab fa-instagram', href: 'https://www.instagram.com/just__favor/' },
    ];

    return (
        <section id="contact" className="py-16 bg-[#2d3e50] text-white border-b border-white">
            <div className="max-w-[1600px] mx-auto px-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12">
                    <div>
                        {contactItems.map(item => (
                            <div key={item.title} className="flex items-start mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cf7] to-[#6a3ef7] rounded-full flex items-center justify-center text-white text-xl mr-5 shrink-0">
                                    <i className={item.icon}></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                    <p className="text-gray-300">{item.value}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex gap-4 mt-8">
                            {socials.map(s => (
                                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4a6cf7] hover:bg-gradient-to-r hover:from-[#4a6cf7] hover:to-[#6a3ef7] hover:text-white hover:-translate-y-1 transition-all duration-300">
                                    <i className={s.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
