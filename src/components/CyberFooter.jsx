import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const CyberFooter = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        // Aesthetic Grid Animation using Anime.js (very low CPU)
        animate(gridRef.current, {
            backgroundPosition: '0 100px',
            duration: 8000,
            direction: 'normal',
            loop: true,
            easing: 'linear'
        });
    }, []);

    return (
        <footer className="relative h-[300px] w-full bg-[#030014] overflow-hidden border-t border-white/5 selection:bg-purple-500">
            {/* Visual Replacement for WebGL: High-speed CSS Grid + Glow */}
            <div className="absolute inset-0 z-0 perspective-500 overflow-hidden">
                <div 
                    ref={gridRef}
                    className="absolute inset-0 w-full h-[200%] -top-1/2 opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 255, 136, 0.1) 1px, transparent 1px), 
                                          linear-gradient(to bottom, rgba(0, 255, 136, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        transform: 'rotateX(60deg) translateZ(0)',
                        transformOrigin: 'center center'
                    }}
                ></div>
                
                {/* Vaporwave Sun Alternative */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end pb-12 items-center text-center px-4">
                <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 tracking-tighter">
                   KUNAL SINGHI
                </h2>
                <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
                    © {new Date().getFullYear()} • Crafting digital excellence
                </p>
                <div className="mt-4 flex gap-4">
                    <div className="w-1 h-1 rounded-full bg-blue-500/40"></div>
                    <div className="w-1 h-1 rounded-full bg-purple-500/40"></div>
                    <div className="w-1 h-1 rounded-full bg-pink-500/40"></div>
                </div>
            </div>

            {/* Fade Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014] pointer-events-none" />
        </footer>
    );
};

export default CyberFooter;
