import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const StaggeredText = ({ text, className = "", delay = 0 }) => {
    const textRef = useRef(null);
    const letters = text.split('');

    useEffect(() => {
        if (!textRef.current || !text) return;

        const letterInners = textRef.current.querySelectorAll('.letter-inner');
        
        // Ensure they start invisible but are controlled by JS
        letterInners.forEach(el => {
            el.style.opacity = '0';
            el.style.display = 'inline-block';
        });

        const tl = animate(letterInners, {
            translateY: [40, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            ease: 'easeOutExpo',
            duration: 1200,
            delay: delay + stagger(60)
        });

        return () => {
            if (tl) tl.pause();
        };
    }, [delay, text]);

    if (!text) return null;

    // Filter classes: remove gradient behaviors from parent, keep layout/typography
    const parentClasses = className
        .split(' ')
        .filter(c => !c.includes('bg-') && !c.includes('text-transparent') && !c.includes('bg-clip-text'))
        .join(' ');

    return (
        <div 
            ref={textRef} 
            className={`flex flex-wrap justify-center md:justify-start ${parentClasses}`}
        >
            {letters.map((char, index) => (
                <span 
                    key={index} 
                    className="letter-outer inline-block"
                    style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                    <span 
                        className={`letter-inner inline-block ${className}`}
                        style={{ 
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent',
                            // This ensures the gradient is clipped to the letter
                            display: 'inline-block'
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default StaggeredText;
