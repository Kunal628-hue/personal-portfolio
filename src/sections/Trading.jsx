import React from 'react';
import { motion } from 'framer-motion';
import Market3D from '../components/Market3D';
import { LineChart, BarChart2, TrendingUp } from 'lucide-react';

const Trading = () => {
    return (
        <section id="trading" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Active <span className="text-green-500">Trader</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Beyond code, I navigate the financial markets. I apply the same analytical rigor from engineering to identify patterns, manage risk, and execute trades with discipline.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Technical Analysis</h3>
                                    <p className="text-gray-400 text-sm">Charting market structure and price action.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <LineChart size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Risk Management</h3>
                                    <p className="text-gray-400 text-sm">Calculated position sizing and portfolio balance.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                    <BarChart2 size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Market Psychology</h3>
                                    <p className="text-gray-400 text-sm">Understanding sentiment and behavioral economics.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3D Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 h-[400px] relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-3xl opacity-30" />
                        <Market3D />
                        <div className="absolute bottom-4 right-4 text-xs text-gray-500 font-mono">
                            Live Market Structure Visualization
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Trading;
