import React, { useEffect, useRef, useState } from 'react';
import { createTimeline } from 'animejs';

const PageLoader = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timeline = createTimeline({
            easing: 'easeInOutQuart',
            onComplete: () => {
                onComplete();
            }
        });

        timeline
            .add('.loader-line', {
                width: ['0%', '100%'],
                duration: 1500,
                onRender: (anim) => {
                    setProgress(Math.round(anim.progress));
                }
            })
            .add('.loader-text', {
                opacity: [1, 0],
                translateY: [0, -20],
                duration: 500
            })
            .add(loaderRef.current, {
                translateY: '-100%',
                duration: 800,
                ease: 'easeInOutExpo'
            });
    }, [onComplete]);

    return (
        <div 
            ref={loaderRef}
            className="fixed inset-0 z-[9999] bg-[#030014] flex flex-col items-center justify-center pointer-events-auto"
        >
            <div className="relative w-64 md:w-96">
                <div className="loader-text flex justify-between items-end mb-4 font-mono">
                    <span className="text-blue-500 text-sm tracking-widest uppercase">Initializing System</span>
                    <span className="text-white text-2xl font-bold">{progress}%</span>
                </div>
                
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="loader-line h-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 w-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                </div>
                
                <div className="loader-text mt-4 text-center">
                    <p className="text-white/40 text-xs tracking-[0.3em] uppercase animate-pulse">
                        Crafting Digital Experiences
                    </p>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default PageLoader;
