import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"], color: "blue" },
    { category: "Backend", items: ["Python", "Java", "Node.js", "Firebase"], color: "emerald" },
    { category: "Hardware & IoT", items: ["Arduino", "Robotics", "Sensors", "Circuit Design"], color: "orange" },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"], color: "purple" }
];

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-20 bg-black text-white relative flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-blue-500">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive technical skillset spanning across software and hardware.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
                    {skills.map((skillSet, index) => (
                        <TiltCard key={index} className="h-full" color={skillSet.color}>
                            <div className="p-6 h-full flex flex-col">
                                <h3 className={`text-xl font-bold mb-4 border-b border-white/10 pb-2 text-${skillSet.color}-400`}>
                                    {skillSet.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillSet.items.map((item) => (
                                        <span
                                            key={item}
                                            className={`px-3 py-1 text-sm font-medium rounded-full border shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-${skillSet.color}-500/10 text-${skillSet.color}-200 border-${skillSet.color}-500/20`}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
