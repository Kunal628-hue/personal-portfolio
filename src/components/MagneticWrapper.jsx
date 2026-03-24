import React, { useRef, useEffect } from 'react';
import { animate } from 'animejs';

const MagneticWrapper = ({ children, className }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 1024) return;
        if (!ref.current) return;
        
        const element = ref.current;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = element.getBoundingClientRect();

            const x = (clientX - (left + width / 2)) * 0.35;
            const y = (clientY - (top + height / 2)) * 0.35;

            // Use Anime.js for consistency and better performance than GSAP in this context
            animate(element, {
                translateX: x,
                translateY: y,
                duration: 400,
                ease: 'easeOutQuad'
            });
        };

        const handleMouseLeave = () => {
            animate(element, {
                translateX: 0,
                translateY: 0,
                duration: 800,
                ease: 'easeOutElastic(1, .5)'
            });
        };

        element.addEventListener('mousemove', handleMouseMove, { passive: true });
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return React.cloneElement(children, { 
        ref, 
        className: `${children.props.className || ''} ${className || ''} interactive magnetic select-none transition-shadow` 
    });
};

export default MagneticWrapper;
