import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Admin",
        company: "Coder's OG's",
        period: "Feb 2026 - Present",
        description: "Leading and managing an open builders community focused on collaboration, open-source contribution, and real-world project development.",
        logo: "/coders_og_logo.png"
    },
    {
        role: "Hackathon Participant",
        company: "MLH (Major League Hacking)",
        period: "15 Nov 2025",
        description: "Participated in a competitive hackathon focused on rapid prototyping and innovation."
    },
    {
        role: "Microsoft AI Workshop",
        company: "Microsoft",
        period: "5 Jan 2026",
        description: "Intensive workshop covering Azure AI services, cognitive computing, and building intelligent apps."
    }
];

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animate('.exp-card', {
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    delay: stagger(200),
                    ease: 'easeOutExpo',
                    duration: 1000
                });

                animate('.exp-dot', {
                    scale: [0, 1],
                    delay: stagger(200, { start: 300 }),
                    ease: 'easeOutBack',
                    duration: 800
                });

                observer.unobserve(entry.target);
            }
        }, { threshold: 0.2 });

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="py-32 bg-transparent text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                        JOURNEY <span className="text-blue-500">&</span> MILESTONES
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">A timeline of professional experiences and specialized training.</p>
                </div>

                <div className="relative space-y-12 pl-8 md:pl-0">
                    <div className="absolute left-[3px] md:left-[226px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent z-0 hidden md:block"></div>
                    <div className="absolute left-0 top-6 bottom-0 w-[2px] bg-blue-500/30 md:hidden ml-4"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="exp-card opacity-0 flex flex-col md:flex-row gap-4 md:gap-12 items-start relative z-10">
                            <div className="exp-dot scale-0 hidden md:block absolute left-[220px] top-6 w-3 h-3 rounded-full bg-blue-500 border-4 border-[#030014] z-10 box-content shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                            <div className="md:w-[220px] pt-4 md:text-right flex-shrink-0">
                                <span className="text-blue-400 font-black tracking-widest flex items-center md:justify-end gap-3 text-sm ml-10 md:ml-0 uppercase">
                                    <Calendar size={14} />
                                    {exp.period}
                                </span>
                            </div>
                            <div className="flex-1 glass-dark p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all ml-4 md:ml-0 group">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors uppercase">{exp.role}</h3>
                                    {exp.logo && (
                                        <img 
                                            src={exp.logo} 
                                            alt={exp.company} 
                                            className="w-14 h-14 rounded-xl object-cover border border-white/10 p-1 bg-black/50 shadow-xl group-hover:scale-110 transition-transform duration-500" 
                                        />
                                    )}
                                </div>
                                <h4 className="text-blue-300 mb-6 text-sm font-bold tracking-widest uppercase">{exp.company}</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
