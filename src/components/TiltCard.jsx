import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = "", color = "blue" }) => {
    const ref = useRef(null);
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
        yellow: "234, 179, 8",
        red: "239, 68, 68",
        green: "34, 197, 94",
        pink: "236, 72, 153",
    };

    // Add support for custom colors if passed as hex or if it's not in map, 
    // but primarily rely on map for safety or default to blue
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

export default TiltCard;
