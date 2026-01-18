import React, { useRef, useEffect, useState } from 'react';

const TextScramble = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        let iteration = 0;
        let interval = null;

        // Initial delay before starting the effect
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                setDisplayText(
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        }, 500); // 500ms delay

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [text]);

    return (
        <span className={className}>{displayText}</span>
    );
};

export default TextScramble;
