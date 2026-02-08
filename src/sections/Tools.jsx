import React from 'react';
import { motion } from 'framer-motion';
import {
    Database,
    Code,
    GitBranch,
    Github,
    Figma,
    Image,
    Film,
    TrendingUp,
    PenTool,
    Bitcoin,
    Server,
    Zap
} from 'lucide-react';

const ToolCard = ({ icon: Icon, name, color }) => (
    <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full mx-4 min-w-[180px] hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
        <div className={`p-2 rounded-full bg-${color}-500/10`}>
            <Icon size={20} className={`text-${color}-400`} />
        </div>
        <span className="font-medium text-gray-300">{name}</span>
    </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 25 }) => {
    return (
        <div className="flex overflow-hidden relative w-full mb-8 group">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black z-10" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...items, ...items, ...items, ...items].map((tool, index) => (
                    <ToolCard key={`${tool.name}-${index}`} {...tool} />
                ))}
            </motion.div>
        </div>
    );
};

const Tools = () => {
    const row1 = [
        { name: "VS Code", icon: Code, color: "blue" },
        { name: "Git", icon: GitBranch, color: "red" },
        { name: "GitHub", icon: Github, color: "gray" },
        { name: "PostgreSQL", icon: Database, color: "blue" },
        { name: "MySQL", icon: Server, color: "orange" },
        { name: "Supabase", icon: Zap, color: "green" }
    ];

    const row2 = [
        { name: "Figma", icon: Figma, color: "purple" },
        { name: "Photoshop", icon: Image, color: "blue" },
        { name: "After Effects", icon: Film, color: "purple" },
        { name: "Canva", icon: PenTool, color: "cyan" },
        { name: "Groww", icon: TrendingUp, color: "green" },
        { name: "CoinDCX", icon: Bitcoin, color: "yellow" }
    ];

    return (
        <section id="tools" className="py-20 bg-black text-white relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                        Tools & Technologies
                    </h2>
                    <p className="text-gray-400">The arsenal I use to build and create.</p>
                </motion.div>
            </div>

            <div className="relative w-full">
                <MarqueeRow items={row1} direction="left" speed={30} />
                <MarqueeRow items={row2} direction="right" speed={35} />
            </div>
        </section>
    );
};

export default Tools;
