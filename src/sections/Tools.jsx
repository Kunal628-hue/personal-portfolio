import React from 'react';
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
    <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full mx-4 min-w-[180px] hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 pointer-events-auto">
        <div className={`p-2 rounded-full bg-blue-500/10`}>
            <Icon size={18} className="text-blue-400" />
        </div>
        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{name}</span>
    </div>
);

const MarqueeRow = ({ items, direction = "left" }) => {
    const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
    
    return (
        <div className="flex overflow-hidden relative w-full mb-8 group select-none pointer-events-none">
            {/* Gradient Fades for depth */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10" />

            <div className={`flex whitespace-nowrap ${animationClass} py-4`}>
                {[...items, ...items, ...items, ...items].map((tool, index) => (
                    <ToolCard key={`${tool.name}-${index}`} {...tool} />
                ))}
            </div>
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
        <section id="tools" className="py-24 bg-[#030014] text-white relative z-10 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center group">
                    <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 tracking-tighter uppercase transition-all duration-500 group-hover:tracking-widest">
                        The <span className="text-white opacity-80">Tech</span> Stack
                    </h2>
                    <p className="text-gray-500 font-medium tracking-wide">Premium tools for building premium experiences.</p>
                </div>
            </div>

            <div className="relative w-full">
                <MarqueeRow items={row1} direction="left" />
                <MarqueeRow items={row2} direction="right" />
            </div>
        </section>
    );
};

export default Tools;
