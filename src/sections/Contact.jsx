import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import Earth from '../components/Earth';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-blue-500">Touch</span></h2>
                    <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
                </motion.div>

                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">

                    {/* Contact Links */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <motion.a
                            href="mailto:imsinghi2016@gmail.com"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500 transition-colors">
                                <Mail className="text-blue-400 group-hover:text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Email</h3>
                                <p className="text-gray-400 text-sm">imsinghi2016@gmail.com</p>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/kunal-singhi-jain-2b3329386/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group"
                        >
                            <div className="p-4 bg-purple-500/20 rounded-full group-hover:bg-purple-500 transition-colors">
                                <Linkedin className="text-purple-400 group-hover:text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">LinkedIn</h3>
                                <p className="text-gray-400 text-sm">Connect with me</p>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://github.com/Kunal628-hue"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-gray-500/50 transition-colors group"
                        >
                            <div className="p-4 bg-gray-500/20 rounded-full group-hover:bg-gray-500 transition-colors">
                                <Github className="text-gray-400 group-hover:text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">GitHub</h3>
                                <p className="text-gray-400 text-sm">Explore my code</p>
                            </div>
                        </motion.a>
                    </div>

                    {/* 3D Earth */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <Earth />
                    </motion.div>

                </div>

                <div className="mt-20 text-center border-t border-white/10 pt-8">
                    <p className="text-gray-500 text-sm">
                        Built using modern web technologies · Kunal Singhi
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
