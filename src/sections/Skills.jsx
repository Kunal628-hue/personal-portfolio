import React from 'react';
import { motion } from 'framer-motion';
import TagCloud from '../components/TagCloud';

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-20 bg-black text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-blue-500">Skills</span>
                    </h2>
                    <p className="text-gray-400">Interactive 3D Universe of Technologies</p>
                </motion.div>

                <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
                    <TagCloud />
                </div>
            </div>
        </section>
    );
};

export default Skills;
