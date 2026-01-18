import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 bg-gray-900 text-white flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            I am a first-year B.Tech Computer Science student with a strong interest in building practical software solutions. My journey into technology started with curiosity about how systems work, which gradually expanded into programming, problem-solving, and robotics.
                        </p>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            I work with languages and tools like Python, Java, SQL, and modern web technologies, and I enjoy applying logic to real-world challenges—whether through software applications, data-driven systems, or robotics projects. I am continuously learning and experimenting to build a strong foundation for future roles in software and technology.
                        </p>

                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 p-4 bg-white/5 rounded-lg border border-white/10">
                                <GraduationCap className="text-blue-400" />
                                <div>
                                    <h4 className="font-bold">Computer Science</h4>
                                    <p className="text-sm text-gray-400">Student</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-4 bg-white/5 rounded-lg border border-white/10">
                                <Code className="text-purple-400" />
                                <div>
                                    <h4 className="font-bold">Core Focus</h4>
                                    <p className="text-sm text-gray-400">Programming • Systems • Robotics</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">What drives me?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                                    <span className="text-gray-300">Solving logical and real-world problems through code and systems thinking</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                                    <span className="text-gray-300">Building software, robotics projects, and experiments that connect theory with practice</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-pink-500" />
                                    <span className="text-gray-300">Exploring technology, markets, and data to understand how systems behave and evolve</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
