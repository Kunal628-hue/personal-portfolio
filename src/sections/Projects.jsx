import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { animate, stagger } from 'animejs';
import Typewriter from '../components/Typewriter';

const largeScaleProjects = [
    {
        title: "Global Notes Workspace",
        description: "A persistent notes workspace featuring search functionality and a tagging system for efficient note organization.",
        tags: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/aneek22112007-tech/OJT-2025-Persistent-Notes-Workspace-with-Search-Tags.git",
            demo: "https://global-notes-workspace.vercel.app/"
        }
    },
    {
        title: "Personal Portfolio",
        description: "A high-performance, 3D animated portfolio website built with React, Three.js, and Tailwind CSS. Features smooth scroll animations and responsive design.",
        tags: ["HTML", "CSS", "React", "Tailwind", "JSON"],
        links: {
            github: "https://github.com/Kunal628-hue/personal-portfolio.git",
            demo: "https://personal-portfolio-kunal.netlify.app/"
        }
    }
];

const smallScaleProjects = [
    {
        title: "Singhi Ghar Khata",
        description: "A comprehensive house expense management system designed to track daily household expenses and manage budget efficiently.",
        tags: ["HTML", "CSS", "JavaScript", "JSON", "Chart.js"],
        links: {
            github: "https://github.com/Kunal628-hue/Singhi-GharKhata.git",
            demo: "https://starlit-longma-c9ea99.netlify.app/"
        }
    },
    {
        title: "Personal Finance Manager",
        description: "A secure and user-friendly personal finance manager to track income, expenses, and savings with login authentication.",
        tags: ["HTML", "CSS", "JavaScript", "Chart.js", "JSON"],
        links: {
            github: "https://github.com/Kunal628-hue/Personal-finance-manager.git",
            demo: "https://spiffy-chaja-8af14c.netlify.app/login.html"
        }
    }
];

const roboticsProjects = [
    {
        title: "Automatic Plant Watering System",
        description: "IoT-based system that monitors soil moisture and automatically waters plants when needed.",
        tags: ["Arduino", "C++", "Sensors"]
    },
    {
        title: "Obstacle Avoiding Robot",
        description: "Autonomous robot vehicle capable of detecting and navigating around obstacles using ultrasonic sensors.",
        tags: ["Arduino", "Robotics", "Ultrasonic Sensor"]
    },
    {
        title: "Fire Safety System",
        description: "Automated fire detection and alarm system using flame and smoke sensors for early warning.",
        tags: ["Arduino", "Safety", "IoT"]
    }
];

const ProjectCard = ({ project, index, compact = false }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (window.innerWidth < 1024) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) * 0.05;
        const y = (e.clientY - (rect.top + rect.height / 2)) * 0.05;

        cardRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseLeave = () => {
        cardRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-full w-full bg-black/50 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform-gpu will-change-transform"
            style={{ transition: 'transform 0.1s ease-out, border-color 0.3s ease' }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className={`${compact ? 'p-6' : 'p-8'} relative z-10 flex flex-col h-full`}>
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <Folder className="text-blue-400" size={compact ? 20 : 24} />
                    </div>
                    {project.links && (
                        <div className="flex gap-4">
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    )}
                </div>

                <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold mb-3 group-hover:text-blue-400 transition-colors`}>
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm md:text-base">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-blue-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animate('.project-reveal', {
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: stagger(150),
                    ease: 'easeOutExpo',
                    duration: 1000
                });
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.05 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-32 bg-transparent text-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24 project-reveal opacity-0">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
                        Selected <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg h-[50px] md:h-auto flex items-center justify-center">
                        <Typewriter text="Engineering digital solutions at the intersection of design and functionality." delay={600} />
                    </p>
                </div>

                <div className="space-y-32">
                    <div className="project-reveal opacity-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {largeScaleProjects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="project-reveal opacity-0">
                        <h3 className="text-sm font-black text-blue-400 mb-10 tracking-[0.4em] uppercase opacity-40">System Architecture</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {smallScaleProjects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} compact={true} />
                            ))}
                        </div>
                    </div>

                    <div className="project-reveal opacity-0">
                        <h3 className="text-sm font-black text-orange-400 mb-10 tracking-[0.4em] uppercase opacity-40">Robotics Lab</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {roboticsProjects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} compact={true} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
