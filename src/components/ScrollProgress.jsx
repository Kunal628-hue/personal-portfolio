import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement;
            const b = document.body;
            const st = 'scrollTop';
            const sh = 'scrollHeight';

            const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            setScrollPercentage(percent);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-green-400 z-[9999] transition-all duration-300 ease-out will-change-[width] shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
            style={{ width: `${scrollPercentage}%` }}
        />
    );
};

export default ScrollProgress;
