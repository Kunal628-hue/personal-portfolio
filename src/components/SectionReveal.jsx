import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const SectionReveal = ({ children, className = "" }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate(sectionRef.current, {
                        translateY: [50, 0],
                        opacity: [0, 1],
                        ease: 'easeOutExpo',
                        duration: 1200,
                        delay: 200
                    });
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
};

export default SectionReveal;
