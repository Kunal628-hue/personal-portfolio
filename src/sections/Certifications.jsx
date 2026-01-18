import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, Center, Text3D } from '@react-three/drei';

// Simplification: Keeping strict 3D in the Cards might be too heavy with multiple canvases.
// Let's use Framer Motion's preserve-3d for floating DOM elements instead, 
// similar to the Projects section which looked great.

const certifications = [
    {
        title: "Python Programming",
        issuer: "Course Certification",
        date: "2024",
        color: "from-blue-500 to-yellow-500"
    },
    {
        title: "Robotics Foundation",
        issuer: "Course Certification",
        date: "2023",
        color: "from-red-500 to-orange-500"
    },
    {
        title: "Data Science",
        issuer: "Professional Certificate",
        date: "2025",
        color: "from-green-400 to-emerald-600"
    },
    {
        title: "AI & Machine Learning",
        issuer: "Advanced Course",
        date: "2026",
        color: "from-purple-500 to-pink-500"
    }
];

const CertCard3D = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                boxShadow: "0px 20px 50px rgba(0,0,0,0.5)"
            }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            className="relative w-full md:w-[350px] p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent overflow-hidden group"
        >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-xl rounded-2xl z-0" />

            {/* Animated Gradient Border */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-r ${cert.color}`} />

            <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                {/* Floating Icon */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index }}
                    className={`p-4 rounded-full bg-gradient-to-br ${cert.color} mb-6 shadow-lg`}
                >
                    <Award className="text-white" size={32} />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>

                <div className="mt-auto pt-4 border-t border-white/10 w-full">
                    <span className="text-xs font-mono text-gray-500">{cert.date}</span>
                </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-white/5 to-transparent z-20" />
        </motion.div>
    )
}

const Certifications = () => {
    return (
        <section className="py-20 bg-black text-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4">Certifications</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 perspective-[2000px]">
                    {certifications.map((cert, index) => (
                        <CertCard3D key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
