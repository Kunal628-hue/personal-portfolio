import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { animate, stagger } from 'animejs';
import MagneticWrapper from './MagneticWrapper';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const itemRef = useRef(null);

    const navItems = [
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },

        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        animate('.nav-item', {
            translateY: [-20, 0],
            opacity: [0, 1],
            delay: stagger(100, { start: 500 }),
            ease: 'easeOutExpo',
            duration: 1000
        });

        animate('.nav-logo', {
            translateX: [-20, 0],
            opacity: [0, 1],
            ease: 'easeOutExpo',
            duration: 1000,
            delay: 300
        });
    }, []);

    return (
        <nav ref={navRef} className="fixed w-full z-[100] bg-[#030014]/40 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 nav-logo opacity-0">
                        <a href="#" className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tighter hover:scale-105 transition-transform">
                            KUNAL<span className="text-white/20">.</span>SINGHI
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <MagneticWrapper key={item.name} className="inline-block nav-item opacity-0">
                                    <a
                                        href={item.href}
                                        target={item.newTab ? "_blank" : "_self"}
                                        rel={item.newTab ? "noopener noreferrer" : ""}
                                        className="relative group py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </MagneticWrapper>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#030014]/95 backdrop-blur-2xl border-b border-white/5">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target={item.newTab ? "_blank" : "_self"}
                                rel={item.newTab ? "noopener noreferrer" : ""}
                                className="block px-4 py-3 rounded-xl text-lg font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
