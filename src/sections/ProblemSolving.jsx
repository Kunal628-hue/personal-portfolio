import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
    {
        name: "LeetCode",
        image: "/platforms/leetcode.png",
        url: "https://leetcode.com/",
        color: "yellow"
    },
    {
        name: "CodeChef",
        image: "/platforms/codechef.svg",
        url: "https://www.codechef.com/",
        color: "orange"
    },
    {
        name: "Codolio",
        image: "/platforms/codolio.svg",
        url: "https://codolio.com/",
        color: "purple"
    },
    {
        name: "GeeksforGeeks",
        image: "/platforms/geeksforgeeks.svg",
        url: "https://www.geeksforgeeks.org/",
        color: "green"
    }
];

const InteractiveGrid = () => {
    // grid-cols-12 means 12 columns. We'll generate enough items to fill a reasonable area.
    // 12 columns * 6 rows = 72 items should cover the card nicely.
    const items = Array.from({ length: 72 }, (_, i) => i);

    return (
        <div className="absolute inset-0 z-0 grid grid-cols-12 gap-1 pointer-events-auto">
            {items.map((item) => (
                <motion.div
                    key={item}
                    className="w-full h-full bg-white/5 rounded-[2px]"
                    initial={{ opacity: 0.1, scale: 1 }}
                    whileHover={{
                        scale: 1.1,
                        opacity: 0.8,
                        backgroundColor: "#22d3ee", // Cyan-400
                        transition: { duration: 0.1 }
                    }}
                    transition={{ duration: 0.5 }}
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
                                    <div className={`p-4 rounded-2xl bg-black/60 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:bg-${platform.color}-500/20 group-hover/icon:border-${platform.color}-500/50`}>
                                        <img
                                            src={platform.image}
                                            alt={platform.name}
                                            className="w-16 h-16 object-contain filter grayscale group-hover/icon:grayscale-0 transition-all duration-300 drop-shadow-md"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-400 group-hover/icon:text-white transition-colors bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
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
