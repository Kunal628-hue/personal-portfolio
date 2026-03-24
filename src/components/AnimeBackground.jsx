import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const AnimeBackground = () => {
    const gridRef = useRef(null);
    const containerRef = useRef(null);

    // Reduced grid density for performance (12x12 = 144 dots)
    const rows = 12;
    const cols = 12;

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        grid.innerHTML = '';
        const dotCount = rows * cols;
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot w-1 h-1 bg-blue-500/10 rounded-full will-change-transform';
            grid.appendChild(dot);
        }

        const animation = animate('.dot', {
            scale: [0.2, 1],
            opacity: [0.05, 0.3],
            // Significantly simpler stagger
            delay: stagger(150, { grid: [cols, rows], from: 'center' }),
            duration: 3000,
            loop: true,
            direction: 'alternate',
            ease: 'easeInOutSine'
        });

        return () => animation.pause();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
            <div 
                ref={gridRef}
                className="grid gap-16 p-16 justify-center items-center h-full w-full"
                style={{ 
                    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
                }}
            >
            </div>
            {/* Simple static gradients are better for performance */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-transparent to-[#030014]"></div>
        </div>
    );
};

export default AnimeBackground;
