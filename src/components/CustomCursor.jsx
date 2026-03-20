import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const mainRef = useRef(null);
    const followerRef = useRef(null);
    const particlesRef = useRef([]);

    // Initialize 20 particles
    const particleCount = 20;

    useEffect(() => {
        const main = mainRef.current;
        const follower = followerRef.current;
        const particles = particlesRef.current;

        // Optimized GSAP setters
        const xMain = gsap.quickTo(main, "x", { duration: 0.1, ease: "none" });
        const yMain = gsap.quickTo(main, "y", { duration: 0.1, ease: "none" });
        const xFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3.out" });
        const yFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3.out" });

        let currentParticle = 0;

        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            xMain(clientX);
            yMain(clientY);
            xFollower(clientX);
            yFollower(clientY);

            // Dynamic Gradient Shift
            const hue = (clientX / window.innerWidth) * 360;
            gsap.to(follower, {
                filter: `drop-shadow(0 0 15px hsla(${hue}, 80%, 60%, 0.7))`,
                borderColor: `hsla(${hue}, 80%, 70%, 1)`,
                duration: 0.4,
                overwrite: 'auto'
            });

            // Sparkling Circular Trail
            const p = particles[currentParticle];
            if (p) {
                gsap.set(p, {
                    x: clientX,
                    y: clientY,
                    scale: 1,
                    opacity: 0.8,
                    background: `hsla(${hue}, 80%, 70%, 1)`,
                    boxShadow: `0 0 10px hsla(${hue}, 80%, 70%, 0.8)`
                });
                gsap.to(p, {
                    scale: 0,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out"
                });
            }
            currentParticle = (currentParticle + 1) % particleCount;
        };

        const handleHover = () => {
            gsap.to(follower, {
                scale: 1.8,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                duration: 0.4,
                ease: "back.out(1.5)"
            });
            gsap.to(main, { scale: 0, duration: 0.2 });
        };

        const handleUnhover = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                duration: 0.4,
                ease: "power2.out"
            });
            gsap.to(main, { scale: 1, duration: 0.2 });
        };

        const handleInteraction = (e) => {
            const target = e.target.closest('button, a, [role="button"], .interactive');
            if (target) handleHover();
            else handleUnhover();
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleInteraction);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleInteraction);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999]" data-cursor-loaded="true">
            {/* DEBUG TIP: If you see this in Inspect Element, the component is working */}
            {/* Sparkle Particles Trail */}
            {Array.from({ length: particleCount }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (particlesRef.current[i] = el)}
                    className="fixed w-3 h-3 rounded-full opacity-0 pointer-events-none bg-white -translate-x-1/2 -translate-y-1/2"
                />
            ))}

            {/* Glowing Core Dot */}
            <div ref={mainRef} className="fixed">
                <div className="w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#fff] border border-black/20" />
            </div>

            {/* Dynamic Rainbow Follower */}
            <div ref={followerRef} className="fixed">
                <div
                    className="w-12 h-12 border-2 border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-shadow"
                />
            </div>
        </div>
    );
};

export default CustomCursor;
