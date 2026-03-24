import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { GraduationCap, BookOpen, School, Atom } from 'lucide-react';

const EducationCard = ({ icon: Icon, title, period, school, description, tags, color }) => (
    <div className="edu-card opacity-0 glass-dark p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-8 items-start hover:border-blue-500/20 transition-all group relative z-10">
        <div className={`p-5 bg-${color}-600/10 rounded-2xl group-hover:bg-${color}-600/20 transition-colors`}>
            <Icon className={`text-${color}-400 group-hover:scale-110 transition-transform`} size={32} />
        </div>
        <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">{title}</h3>
                <span className={`px-4 py-1.5 bg-blue-500/10 text-blue-300 text-xs font-black tracking-widest rounded-full w-fit uppercase border border-blue-500/20`}>
                    {period}
                </span>
            </div>
            <p className="text-xl text-gray-300 font-bold mb-4">{school}</p>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                {description}
            </p>
            {tags && (
                <div className="flex gap-3 flex-wrap">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 bg-white/5 rounded-xl text-xs font-bold text-gray-400 uppercase tracking-tighter border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const AnimeGlowShapes = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        animate('.glow-orbit', {
            rotateZ: '1turn',
            duration: 20000,
            loop: true,
            ease: 'linear'
        });

        animate('.glow-blob', {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            translateX: () => Math.random() * 100 - 50,
            translateY: () => Math.random() * 100 - 50,
            duration: 5000,
            loop: true,
            direction: 'alternate',
            ease: 'easeInOutSine'
        });
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="glow-orbit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full">
                <div className="glow-blob absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-600/40 rounded-full blur-3xl"></div>
            </div>
            <div className="glow-orbit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/10 rounded-full" style={{ animationDirection: 'reverse' }}>
                <div className="glow-blob absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-600/40 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

const Education = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animate('.edu-card', {
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: stagger(200),
                    ease: 'easeOutExpo',
                    duration: 1200
                });
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="education" ref={sectionRef} className="py-32 bg-black text-white relative overflow-hidden">
            <AnimeGlowShapes />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

                    {/* Content Column */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="mb-16">
                            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                                ACADEMIC <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">FOUNDATION</span>
                            </h2>
                            <p className="text-gray-400 text-xl max-w-2xl">Bridging theoretical concepts with practical application.</p>
                        </div>

                        <div className="space-y-8">
                            <EducationCard
                                icon={GraduationCap}
                                title="B.Tech Computer Science"
                                period="2025 - Present"
                                school="Polaris School of Technology"
                                description="Building a robust foundation in high-performance computing, distributed systems, and modern software engineering."
                                color="blue"
                            />

                            <EducationCard
                                icon={School}
                                title="Senior Secondary (XI–XII)"
                                period="Science Stream"
                                school="St. Mary’s Junior College, Hyderabad"
                                description="Specialized in core physical sciences and mathematics with an emphasis on analytical logic."
                                tags={["PCM", "Advanced Calculus"]}
                                color="purple"
                            />

                            <EducationCard
                                icon={Atom}
                                title="JEE Specialized Prep"
                                period="Academic Discipline"
                                school="Physics Wallah (PW)"
                                description="Rigorous problem-solving training focusing on competitive engineering standards."
                                tags={["Problem Solving", "Conceptual Depth"]}
                                color="orange"
                            />
                        </div>
                    </div>

                    {/* 3D Visual Replacement */}
                    <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center relative h-[500px]">
                        <div className="relative w-64 h-64 border-2 border-blue-500/20 rounded-full flex items-center justify-center animate-spin-slow">
                            <Atom className="text-blue-500 w-32 h-32 opacity-20" />
                            <div className="absolute inset-0 border-t-2 border-blue-400 rounded-full"></div>
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-blue-400 font-black tracking-[0.2em] text-sm uppercase">Conceptual Architecture</p>
                            <div className="w-12 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
