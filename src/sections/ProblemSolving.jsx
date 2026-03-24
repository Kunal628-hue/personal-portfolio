import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const platforms = [
    {
        name: "LeetCode",
        image: "/platforms/leetcode.png",
        url: "https://leetcode.com/u/kunal317-singhi/",
        color: "yellow"
    },
    {
        name: "CodeChef",
        image: "/platforms/codechef.svg",
        url: "https://www.codechef.com/users/zany_ref_83",
        color: "orange"
    },
    {
        name: "Codolio",
        image: "/platforms/codolio.svg",
        url: "https://codolio.com/profile/Kunal2414",
        color: "purple"
    },
    {
        name: "GeeksforGeeks",
        image: "/platforms/geeksforgeeks.svg",
        url: "https://www.geeksforgeeks.org/profile/kunaltyc1?tab=activity",
        color: "green"
    }
];

const InteractiveGrid = () => {
    // Highly optimized minimal grid
    const items = Array.from({ length: 32 }, (_, i) => i);

    return (
        <div className="absolute inset-0 z-0 grid grid-cols-8 gap-2 p-2 opacity-10 pointer-events-none">
            {items.map((item) => (
                <div
                    key={item}
                    className="w-full h-full bg-white/10 rounded-lg hover:bg-cyan-400/50 transition-colors duration-500"
                />
            ))}
        </div>
    );
};

const ProblemSolving = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animate('.problem-reveal', {
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: stagger(150),
                    ease: 'easeOutExpo',
                    duration: 1000
                });
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="problem-solving" ref={sectionRef} className="py-20 bg-[#030014] text-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 problem-reveal opacity-0">
                    <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4 tracking-tighter uppercase">
                        Problem <span className="opacity-70">Solving</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Mastering algorithms and logic through competitive programming platforms.</p>
                </div>

                <div className="max-w-4xl mx-auto flex justify-center problem-reveal opacity-0 h-full">
                    <div className="relative w-full max-w-3xl aspect-[16/6] md:aspect-[3/1] bg-gray-900/40 rounded-3xl border border-white/5 overflow-hidden group">
                        
                        <InteractiveGrid />

                        <div className="relative z-10 h-full flex flex-wrap items-center justify-around p-8 md:p-12 gap-8">
                            {platforms.map((platform, index) => (
                                <a
                                    key={index}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-4 group/icon hover:scale-110 transition-transform duration-500"
                                >
                                    <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors relative group-hover/icon:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                        <img
                                            src={platform.image}
                                            alt={platform.name}
                                            className="w-12 h-12 md:w-16 md:h-16 object-contain filter grayscale group-hover/icon:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <span className="text-xs font-black text-gray-400 group-hover/icon:text-white transition-colors tracking-[0.2em] uppercase">
                                        {platform.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
