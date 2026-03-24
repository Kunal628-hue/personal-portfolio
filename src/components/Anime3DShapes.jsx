import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

const Anime3DShapes = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        
        if (window.innerWidth < 1024) return;
        if (!containerRef.current) return;

        // ANIMATION: High-impact but very low CPU overhead
        animate('.cube', {
            translateY: [0, -30, 0],
            rotateX: '0.25turn',
            rotateY: '0.25turn',
            duration: 10000,
            delay: stagger(1000),
            direction: 'alternate',
            loop: true,
            ease: 'easeInOutQuad'
        });

        animate('.ring', {
            scale: [0.98, 1.02],
            opacity: [0.1, 0.2],
            duration: 6000,
            loop: true,
            direction: 'alternate',
            ease: 'easeInOutSine'
        });

        // OPTIMIZED PARALLAX
        let mouseX = 0;
        let mouseY = 0;
        let rafId;

        const updateParallax = () => {
            if (containerRef.current) {
                containerRef.current.style.transform = `translate3d(0, 0, 0) rotateY(${mouseX}deg) rotateX(${-mouseY}deg)`;
            }
            rafId = requestAnimationFrame(updateParallax);
        };

        const onMouseMove = (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        rafId = requestAnimationFrame(updateParallax);

        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', checkMobile);
            cancelAnimationFrame(rafId);
        };
    }, []);

    // Performant: Return null early for mobile to save Lighthouse resources
    if (isMobile) return null;

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none perspective-2000" style={{ transformStyle: 'preserve-3d' }}>
            <div className="ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-blue-500/10 rounded-full"></div>
            <div className="ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-purple-500/10 rounded-full"></div>
            
            {/* Reduced to 4 high-impact cubes */}
            {[...Array(4)].map((_, i) => (
                <div 
                    key={i} 
                    className="cube absolute w-20 h-20 border border-white/5 opacity-10 pointer-events-none will-change-transform"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 20}%`,
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div className="absolute inset-0 bg-blue-500/5 border border-white/5" style={{ transform: 'translateZ(40px)' }}></div>
                    <div className="absolute inset-0 bg-purple-500/5 border border-white/5" style={{ transform: 'rotateY(90deg) translateZ(40px)' }}></div>
                    <div className="absolute inset-0 bg-pink-500/5 border border-white/5" style={{ transform: 'rotateX(90deg) translateZ(40px)' }}></div>
                </div>
            ))}

            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[180px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[180px]"></div>
        </div>
    );
};

export default Anime3DShapes;
