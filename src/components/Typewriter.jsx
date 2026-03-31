import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, delay = 0, speed = 15, className = "" }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasStarted) {
                setHasStarted(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let i = 0;
        let timeout;
        
        const startTyping = () => {
            setIsTyping(true);
            const typeNextChar = () => {
                if (i < text.length) {
                    setDisplayedText(text.substring(0, i + 1));
                    i++;
                    timeout = setTimeout(typeNextChar, speed + (Math.random() * 10));
                } else {
                    setIsTyping(false);
                }
            };
            typeNextChar();
        };

        const initialTimeout = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(initialTimeout);
            clearTimeout(timeout);
        };
    }, [hasStarted, text, delay, speed]);

    return (
        <span ref={ref} className={`inline-flex ${className}`}>
            <span>{displayedText}</span>
            <span 
                className={`ml-1 w-[2px] bg-blue-400 inline-block align-middle ${
                    isTyping ? 'animate-none opacity-100' : 'animate-pulse opacity-70'
                }`}
                style={{ height: '1.1em', marginTop: '0.1em' }}
            />
        </span>
    );
};

export default Typewriter;
