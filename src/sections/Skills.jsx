import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import TiltCard from '../components/TiltCard';
import Typewriter from '../components/Typewriter';

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"], color: "blue" },
    { category: "Backend", items: ["Python", "Java", "Node.js", "Firebase"], color: "emerald" },
    { category: "Hardware & IoT", items: ["Arduino", "Robotics", "Sensors", "Circuit Design"], color: "orange" },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"], color: "purple" }
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animate('.skill-card', {
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: stagger(150),
                    ease: 'easeOutExpo',
                    duration: 1200
                });

                animate('.skill-tag', {
                    scale: [0.5, 1],
                    opacity: [0, 1],
                    delay: stagger(20, { start: 500 }),
                    ease: 'easeOutExpo',
                    duration: 800
                });

                observer.unobserve(entry.target);
            }
        }, { threshold: 0.2 });

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="min-h-screen py-32 bg-transparent text-white relative flex flex-col justify-center overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                        TECHNICAL <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">ARSENAL</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg h-[40px] md:h-auto">
                        <Typewriter text="Mastering the intersection of sophisticated software and tangible hardware." delay={800} />
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
                    {skills.map((skillSet, index) => (
                        <div key={index} className="skill-card h-full opacity-0">
                            <TiltCard className="h-full" color={skillSet.color}>
                                <div className="p-8 h-full flex flex-col glass-dark border border-white/5">
                                    <h3 className={`text-2xl font-black mb-6 tracking-tight text-${skillSet.color}-400 uppercase`}>
                                        {skillSet.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {skillSet.items.map((item) => (
                                            <span
                                                key={item}
                                                className={`skill-tag opacity-0 px-4 py-1.5 text-xs font-bold rounded-lg border border-white/5 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-default`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
