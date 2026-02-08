import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"], color: "blue" },
    { category: "Backend", items: ["Python", "Java", "Node.js", "Firebase"], color: "emerald" },
    { category: "Hardware & IoT", items: ["Arduino", "Robotics", "Sensors", "Circuit Design"], color: "orange" },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"], color: "purple" }
];

const TiltCard = ({ children, className = "", color = "blue" }) => {
    const ref = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        setPosition({ x: mouseX, y: mouseY });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        x.set(0);
        y.set(0);
    };

    // Map color names to RGBA for gradient
    const colorMap = {
        blue: "59, 130, 246",
        emerald: "16, 185, 129",
        orange: "249, 115, 22",
        purple: "168, 85, 247",
        cyan: "6, 182, 212",
    };

    const rgb = colorMap[color] || "59, 130, 246";

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative rounded-xl border border-white/10 bg-gray-900/50 transform-gpu perspective-1000 ${className} group`}
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10 rounded-xl"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${rgb}, 0.15), transparent 40%)`,
                }}
            />
            <div className="relative h-full z-20" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

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
