import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Hackathon Participant",
        company: "MLH (Major League Hacking)",
        period: "15 Nov 2025",
        description: "Participated in a competitive hackathon focused on rapid prototyping and innovation."
    },
    {
        role: "Microsoft AI Workshop",
        company: "Microsoft",
        period: "5 Jan 2026",
        description: "Intensive workshop covering Azure AI services, cognitive computing, and building intelligent apps."
    }
];

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-20 bg-gray-900 text-white overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience <span className="text-blue-500">&</span> Training</h2>
                    <p className="text-gray-400">My professional journey and learning milestones.</p>
                </motion.div>

                <div className="relative space-y-8 pl-8 md:pl-0">
                    {/* Animated SVG Line */}
                    <div className="absolute left-[3px] md:left-[226px] top-6 bottom-0 w-1 h-full z-0 hidden md:block">
                        <svg className="h-full w-full overflow-visible" viewBox="0 0 10 500" preserveAspectRatio="none">
                            <motion.path
                                d="M 2 0 V 1000"
                                stroke="#3b82f6"
                                strokeWidth="4"
                                fill="none"
                                style={{ pathLength }}
                            />
                        </svg>
                    </div>
                    {/* Mobile Line fallback */}
                    <div className="absolute left-0 top-6 bottom-0 w-0.5 bg-gray-800 md:hidden ml-4"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative z-10"
                        >
                            {/* Timeline Dot for Desktop */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                                className="hidden md:block absolute left-[220px] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10 box-content"
                            />

                            {/* Period */}
                            <div className="md:w-[220px] pt-4 md:text-right flex-shrink-0">
                                <span className="text-blue-400 font-bold flex items-center md:justify-end gap-2 text-sm md:text-base ml-10 md:ml-0">
                                    <Calendar size={16} />
                                    {exp.period}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors ml-4 md:ml-0">
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-blue-300 mb-4 text-sm font-medium">{exp.company}</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
