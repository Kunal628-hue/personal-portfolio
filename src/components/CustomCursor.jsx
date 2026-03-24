import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const mainRef = useRef(null);
    const followerRef = useRef(null);
    const cursorCoords = useRef({ x: 0, y: 0 });
    const followerCoords = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            cursorCoords.current.x = clientX;
            cursorCoords.current.y = clientY;
        };

        let rafId;
        const tick = () => {
            // Easing / LERP (Follower)
            followerCoords.current.x += (cursorCoords.current.x - followerCoords.current.x) * 0.15;
            followerCoords.current.y += (cursorCoords.current.y - followerCoords.current.y) * 0.15;

            if (mainRef.current) {
                mainRef.current.style.transform = `translate3d(${cursorCoords.current.x}px, ${cursorCoords.current.y}px, 0)`;
            }

            if (followerRef.current) {
                followerRef.current.style.transform = `translate3d(${followerCoords.current.x}px, ${followerCoords.current.y}px, 0)`;
            }

            rafId = requestAnimationFrame(tick);
        };

        const handleInteraction = (e) => {
            const target = e.target.closest('button, a, [role="button"], .interactive, .magnetic');
            if (target && followerRef.current) {
                followerRef.current.style.transform += ' scale(2.5)';
                followerRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                followerRef.current.style.borderColor = 'rgba(255, 255, 255, 0.8)';
            } else if (followerRef.current) {
                followerRef.current.style.backgroundColor = 'transparent';
                followerRef.current.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleInteraction);
        rafId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleInteraction);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block">
            {/* Main Core Dot - Ultra Low-Cost */}
            <div 
                ref={mainRef} 
                className="fixed w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#fff] will-change-transform"
            />

            {/* Smooth Follower - 0 JS animation library overhead per frame */}
            <div 
                ref={followerRef} 
                className="fixed w-8 h-8 border border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform transition-[background-color,border-color,scale] duration-300"
            />
        </div>
    );
};

export default CustomCursor;
