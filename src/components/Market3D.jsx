import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const Market3DReplacement = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Animate candlesticks with Anime.js (High-performance replacement for WebGL)
        animate('.candle-body', {
            scaleY: [0.1, 1],
            opacity: [0, 0.8],
            duration: 1500,
            delay: stagger(100),
            ease: 'easeOutElastic(1, .8)'
        });

        animate('.candle-wick', {
            scaleY: [0, 1.2, 1],
            opacity: [0, 0.4],
            duration: 2000,
            delay: stagger(100),
            ease: 'easeOutExpo'
        });

        // Infinite Pulse for the market "vibe"
        animate('.market-glow', {
            opacity: [0.3, 0.6],
            scale: [0.95, 1.05],
            duration: 4000,
            loop: true,
            direction: 'alternate',
            ease: 'easeInOutSine'
        });
    }, []);

    const candles = Array.from({ length: 12 }).map((_, i) => {
        const isUp = Math.random() > 0.4;
        const height = 40 + Math.random() * 80;
        const yPos = 30 + Math.random() * 40;
        
        return (
            <div 
                key={i} 
                className="relative flex flex-col items-center justify-center h-full"
                style={{ width: '20px' }}
            >
                {/* Wick */}
                <div 
                    className="candle-wick w-[1px] h-32 bg-gray-500/40 absolute opacity-0"
                    style={{ transformOrigin: 'center' }}
                ></div>
                {/* Body */}
                <div 
                    className={`candle-body w-3 rounded-sm opacity-0 shadow-lg ${isUp ? 'bg-green-500/80 shadow-green-500/20' : 'bg-red-500/80 shadow-red-500/20'}`}
                    style={{ 
                        height: `${height}px`, 
                        transform: `translateY(${isUp ? -yPos : yPos}px)`,
                        transformOrigin: 'center'
                    }}
                ></div>
            </div>
        );
    });

    return (
        <div ref={containerRef} className="w-full h-full flex items-center justify-center gap-4 relative overflow-visible perspective-1000">
            <div className="market-glow absolute inset-0 bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="flex items-center justify-center gap-2 md:gap-4 h-64 transform-gpu" style={{ transform: 'rotateX(10deg) rotateY(-10deg)' }}>
                {candles}
            </div>
        </div>
    );
};

const Market3D = () => {
    return (
        <div className="h-[400px] w-full flex items-center justify-center">
            <Market3DReplacement />
        </div>
    );
};

export default Market3D;
