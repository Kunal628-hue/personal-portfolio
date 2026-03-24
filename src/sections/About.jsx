import React, { useEffect, useRef } from 'react';
import { User, Code, GraduationCap } from 'lucide-react';
import { animate, stagger } from 'animejs';

const About = () => {
    const listRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate('.about-list-item', {
                        translateX: [30, 0],
                        opacity: [0, 1],
                        delay: stagger(200),
                        ease: 'easeOutExpo',
                        duration: 1000
                    });
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (listRef.current) observer.observe(listRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="min-h-screen py-20 bg-transparent text-white flex items-center relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            I am a first-year B.Tech Computer Science student with a strong interest in building practical software solutions. My journey into technology started with curiosity about how systems work, which gradually expanded into programming, problem-solving, and robotics.
                        </p>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            I work with languages and tools like Python, Java, SQL, and modern web technologies, and I enjoy applying logic to real-world challenges—whether through software applications, data-driven systems, or robotics projects. I am continuously learning and experimenting to build a strong foundation for future roles in software and technology.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <GraduationCap className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Computer Science</h4>
                                    <p className="text-sm text-gray-400">Honors Student</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <Code className="text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Core Focus</h4>
                                    <p className="text-sm text-gray-400">Logic • Systems • AI</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative" ref={listRef}>
                        <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full -z-10" />
                        <div className="glass p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <User size={120} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white/90">What drives me?</h3>
                            <ul className="space-y-6">
                                <li className="about-list-item flex items-start gap-4 opacity-0">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                                    <span className="text-gray-300 leading-relaxed">Solving logical and real-world problems through code and systems thinking</span>
                                </li>
                                <li className="about-list-item flex items-start gap-4 opacity-0">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                                    <span className="text-gray-300 leading-relaxed">Building software, robotics projects, and experiments that connect theory with practice</span>
                                </li>
                                <li className="about-list-item flex items-start gap-4 opacity-0">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
                                    <span className="text-gray-300 leading-relaxed">Exploring technology, markets, and data to understand how systems behave and evolve</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
