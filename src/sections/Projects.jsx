import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: "Global Notes Workspace",
        description: "A persistent notes workspace featuring search functionality and a tagging system for efficient note organization.",
        tags: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/aneek22112007-tech/OJT-2025-Persistent-Notes-Workspace-with-Search-Tags.git",
            demo: "https://ojt-2025-persistent-notes-workspace-three.vercel.app/index.html"
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
    },
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

const arduinoProjects = [
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
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full w-full bg-black/50 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform-gpu perspective-1000"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-gray-900/40 shadow-lg opacity-0 group-hover:opacity-10 pointer-events-none"
            >
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className={`${compact ? 'p-6' : 'p-8'} relative z-10 flex flex-col h-full`} style={{ transform: "translateZ(50px)" }}>
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                        <Folder className="text-blue-400" size={compact ? 20 : 24} />
                    </div>
                    {project.links && (
                        <div className="flex gap-4">
                            <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    )}
                </div>

                <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold mb-3 group-hover:text-blue-400 transition-colors`}>
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-blue-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};


const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 bg-transparent text-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hover over the cards to see the 3D tilt effect in action.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000 mb-20">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Arduino Projects
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hardware and IoT projects powered by Arduino.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
                    {arduinoProjects.map((project, index) => (
                        <ProjectCard key={`arduino-${index}`} project={project} index={index} compact={true} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
