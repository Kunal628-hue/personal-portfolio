import React from 'react';
import { motion } from 'framer-motion';

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
    const items = Array.from({ length: 72 }, (_, i) => i);

    return (
        <div className="absolute inset-0 z-0 grid grid-cols-12 gap-1 pointer-events-auto p-1">
            {items.map((item) => (
                <div
                    key={item}
                    className="w-full h-full bg-white/5 rounded-[2px] transition-all duration-300 hover:scale-110 hover:bg-cyan-400/80 hover:opacity-100 opacity-20"
                />
            ))}
        </div>
    );
};

const ProblemSolving = () => {
    return (
        <section id="problem-solving" className="py-20 bg-black text-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-2">
                        Problem Solving
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto flex justify-center">
                    {/* Removed TiltCard, using a relative div with overflow-hidden */}
                    <div className="relative w-full max-w-3xl aspect-video md:aspect-[3/1] overflow-hidden rounded-xl bg-black/50 border border-white/5">

                        {/* Interactive Background Grid */}
                        <InteractiveGrid />

                        <div className="relative z-10 h-full flex flex-wrap items-center justify-around p-8 md:p-10 gap-8 pointer-events-none">
                            {platforms.map((platform, index) => (
                                <a
                                    key={index}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-4 group/icon pointer-events-auto"
                                >
                                    <div className={`
                                        p-6 rounded-xl 
                                        bg-[#2a2a2a] 
                                        relative overflow-hidden
                                        border-t border-l border-white/10 
                                        border-b-4 border-r-4 border-black/40 
                                        shadow-xl transition-all duration-300 
                                        group-hover/icon:scale-105 group-hover/icon:translate-y-[-2px]
                                        before:absolute before:inset-0 before:opacity-20 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
                                        after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/5 after:to-black/20 after:pointer-events-none
                                    `}>
                                        <div className="relative z-10">
                                            <img
                                                src={platform.image}
                                                alt={platform.name}
                                                className="w-16 h-16 object-contain filter grayscale group-hover/icon:grayscale-0 transition-all duration-300 drop-shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-500 group-hover/icon:text-gray-300 transition-colors mt-2 tracking-wider uppercase text-[10px] shadow-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
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
