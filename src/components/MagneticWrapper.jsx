import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagneticWrapper = ({ children, className }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;
        const element = ref.current;

        const xTo = gsap.quickTo(element, "x", { duration: 0.3, ease: "power2.out" });
        const yTo = gsap.quickTo(element, "y", { duration: 0.3, ease: "power2.out" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = element.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.3);
            yTo(y * 0.3);
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return React.cloneElement(children, { ref, className: `${children.props.className} ${className}` });
};

export default MagneticWrapper;
