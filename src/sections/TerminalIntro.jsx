import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

const stats = [
    { value: "7+", label: "Projects Completed" },
    { value: "500+", label: "Problems Solved" },
    { value: "4+", label: "CP Platforms" },
    { value: "1+", label: "Years Coding" }
];

const TerminalIntro = () => {
    const sectionRef = useRef(null);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        // Blinking cursor effect
        const cursorInterval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animate('.terminal-reveal', {
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: stagger(150),
                    ease: 'easeOutExpo',
                    duration: 1000
                });

                animate('.stat-item', {
                    translateY: [20, 0],
                    opacity: [0, 1],
                    delay: stagger(150, { start: 500 }),
                    ease: 'easeOutExpo',
                    duration: 800
                });

                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        
        return () => {
            clearInterval(cursorInterval);
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={sectionRef} className="pt-20 pb-0 bg-[#030014] text-white relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Terminal Window */}
                <div className="terminal-reveal opacity-0 w-full rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)] mb-12">
                    {/* Terminal Header */}
                    <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                            bash — kunal@portfolio
                        </div>
                    </div>
                    
                    {/* Terminal Body */}
                    <div className="p-6 font-mono text-sm md:text-base leading-relaxed space-y-4">
                        <div>
                            <span className="text-green-400 font-bold">$</span> <span className="text-blue-300">npm</span> run intro
                        </div>
                        <div className="text-gray-300">
                            Software Developer • Robotics Enthusiast • Problem Solver
                        </div>
                        
                        <div className="pt-2">
                            <span className="text-green-400 font-bold">$</span> <span className="text-blue-300">npm</span> install skills
                        </div>
                        <div className="text-gray-300 flex items-center">
                            Frontend • Backend • IoT • UI/UX
                            <span className={`inline-block w-2.5 h-5 bg-cyan-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center terminal-reveal opacity-0">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item opacity-0 flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TerminalIntro;
