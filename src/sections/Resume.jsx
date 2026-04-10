import React, { useEffect, useRef } from 'react';
import { FileText, Download, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';
import { animate, stagger } from 'animejs';
import MagneticWrapper from '../components/MagneticWrapper';

const Resume = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animate('.resume-reveal', {
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: stagger(150),
                    ease: 'easeOutExpo',
                    duration: 1000
                });
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="resume" ref={sectionRef} className="py-32 bg-transparent text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 resume-reveal opacity-0">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
                        CURRICULUM <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">VITAE</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A comprehensive overview of my academic background, professional projects, and technical certifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Resume Highlights */}
                    <div className="resume-reveal opacity-0 space-y-8">
                        <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight">Academic Foundation</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                B.Tech in Computer Science at Polaris School of Technology (2025 - 2029). 
                                Focusing on foundational CS concepts and modern software engineering practices.
                            </p>
                        </div>

                        <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                    <Briefcase size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight">Project Portfolio</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Built production-grade applications like Global Notes Workspace and Planora Smart Event OS, 
                                demonstrating full-stack capabilities and system architecture skills.
                            </p>
                        </div>

                        <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-pink-500/30 transition-all group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight">Certifications</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Certified in Data Science, Machine Learning (Wayspire) and Robotics Engineering (Leep Robotics), 
                                bridging the gap between software and hardware.
                            </p>
                        </div>
                    </div>

                    {/* Resume Action Card */}
                    <div className="resume-reveal opacity-0 flex justify-center lg:justify-end">
                        <div className="relative group w-full max-w-md">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative glass-dark p-10 rounded-[2rem] border border-white/10 flex flex-col items-center text-center shadow-2xl">
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <FileText size={40} className="text-blue-400" />
                                </div>
                                
                                <h3 className="text-3xl font-black mb-4 tracking-tight">Full Resume</h3>
                                <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                                    Explore the detailed web version of my professional journey, skills, and accomplishments.
                                </p>

                                <div className="flex flex-col w-full gap-4">
                                    <MagneticWrapper>
                                        <a 
                                            href="/resume.html" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-blue-500 hover:text-white transition-all shadow-xl text-center"
                                        >
                                            <ExternalLink size={20} />
                                            View Web Resume
                                        </a>
                                    </MagneticWrapper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
