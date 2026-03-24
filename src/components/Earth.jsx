import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const EarthReplacement = () => {
    const globeRef = useRef(null);

    useEffect(() => {
        if (!globeRef.current) return;

        // Rotate the globe element infinitely
        animate(globeRef.current, {
            rotateY: '360deg',
            duration: 15000,
            loop: true,
            easing: 'linear'
        });

        // Entrance animation for the orbit rings
        animate('.orbit-ring', {
            scale: [0, 1],
            opacity: [0, 0.4],
            duration: 2000,
            delay: stagger(300),
            easing: 'easeOutExpo'
        });

        // Pulse effect for the atmosphere
        animate('.atmosphere', {
            scale: [0.95, 1.05],
            opacity: [0.1, 0.2],
            duration: 4000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });
    }, []);

    return (
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center perspective-1000 select-none">
            {/* Atmosphere Glow */}
            <div className="atmosphere absolute inset-0 bg-blue-500/10 rounded-full blur-[80px]"></div>

            {/* Orbiting Rings (CSS 3D) */}
            <div className="orbit-ring absolute w-[120%] h-[120%] border border-blue-400/20 rounded-full opacity-0" 
                 style={{ transform: 'rotateX(70deg) rotateY(10deg)' }}></div>
            <div className="orbit-ring absolute w-[140%] h-[140%] border border-blue-500/10 rounded-full opacity-0" 
                 style={{ transform: 'rotateX(-60deg) rotateY(-20deg)' }}></div>

            {/* The Globe Core */}
            <div 
                ref={globeRef}
                className="relative w-full h-full rounded-full border border-blue-500/20 bg-[#030014] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)]"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Cross-sections for 3D look */}
                <div className="absolute inset-0 border-x border-blue-500/10 rounded-full" style={{ transform: 'rotateY(45deg)' }}></div>
                <div className="absolute inset-0 border-x border-blue-500/10 rounded-full" style={{ transform: 'rotateY(90deg)' }}></div>
                <div className="absolute inset-0 border-x border-blue-500/10 rounded-full" style={{ transform: 'rotateY(135deg)' }}></div>
                <div className="absolute inset-0 border-y border-blue-500/10 rounded-full" style={{ transform: 'rotateX(45deg)' }}></div>
                <div className="absolute inset-0 border-y border-blue-500/10 rounded-full" style={{ transform: 'rotateX(90deg)' }}></div>
                
                {/* Glowing Core */}
                <div className="absolute inset-8 bg-blue-600/5 rounded-full blur-xl animate-pulse"></div>
            </div>
            
            <div className="absolute -bottom-10 text-xs font-black tracking-[0.2em] text-blue-500/40 uppercase">Global Connectivity</div>
        </div>
    );
};

const Earth = () => {
    return (
        <div className="h-[400px] w-full flex items-center justify-center">
            <EarthReplacement />
        </div>
    );
};

export default Earth;
