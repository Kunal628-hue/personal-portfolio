import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
                    <p className="text-gray-400">My academic background.</p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-6 items-start"
                    >
                        <div className="p-4 bg-blue-600/20 rounded-xl">
                            <GraduationCap className="text-blue-400" size={32} />
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                <h3 className="text-2xl font-bold">Bachelor of Technology in Computer Science</h3>
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full w-fit">2025 - Present</span>
                            </div>
                            <p className="text-lg text-gray-300 mb-4">Polaris School of Technology</p>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Currently in first year, building a strong foundation in programming, data structures, and computer architecture.
                            </p>

                            {/* <div className="flex gap-2 flex-wrap"> Removed per user request </div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
