import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        };

        const handleHover = () => {
            gsap.to(follower, {
                scale: 3,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                duration: 0.2
            });
        };

        const handleUnhover = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                duration: 0.2
            });
        };

        // Add event listeners for hover effects
        const interactiveElements = document.querySelectorAll('button, a');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleUnhover);
        });

        // Observer to handle dynamically added elements
        const observer = new MutationObserver(() => {
            const newElements = document.querySelectorAll('button, a');
            newElements.forEach(el => {
                // Ensure we don't double bind - simple check for now
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);

                el.addEventListener('mouseenter', handleHover);
                el.addEventListener('mouseleave', handleUnhover);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();
            const elements = document.querySelectorAll('button, a');
            elements.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    return (
        <div className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference">
            <div ref={cursorRef} className="fixed w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div ref={followerRef} className="fixed w-8 h-8 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
    );
};

export default CustomCursor;
