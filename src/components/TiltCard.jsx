import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = "", color = "blue" }) => {
    const ref = useRef(null);
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!ref.current || window.innerWidth < 1024) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width - 0.5) * 15;
        const yPct = (mouseY / height - 0.5) * 15;

        // Performant direct CSS transform
        ref.current.style.transform = `perspective(1000px) rotateY(${xPct}deg) rotateX(${-yPct}deg)`;
        
        // CSS variable for the spotlight effect
        ref.current.style.setProperty("--mouse-x", `${mouseX}px`);
        ref.current.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    const handleMouseEnter = () => setOpacity(1);

    const handleMouseLeave = () => {
        setOpacity(0);
        if (ref.current) {
            ref.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        }
    };

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

    const rgb = colorMap[color] || "59, 130, 246";

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-xl border border-white/5 bg-gray-900/40 transform-gpu perspective-1000 transition-[transform,border-color] duration-300 ease-out will-change-transform ${className} group`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10 rounded-xl"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(${rgb}, 0.1), transparent 50%)`,
                }}
            />
            <div className="relative h-full z-20">
                {children}
            </div>
        </div>
    );
};

export default TiltCard;
