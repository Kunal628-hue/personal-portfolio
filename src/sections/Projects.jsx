import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: "Personal Portfolio",
        description: "A high-performance, 3D animated portfolio website built with React, Three.js, and Tailwind CSS. Features smooth scroll animations and responsive design.",
        tags: ["React", "Three.js", "Tailwind", "Framer Motion"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Task Master (To-Do App)",
        description: "A sleek todo application with local storage persistence, drag-and-drop reorganization, and category filtering.",
        tags: ["React", "LocalStorage", "CSS Modules"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Expense Tracker",
        description: "Visual expense tracking dashboard using Charts.js to visualize spending habits. Includes income/expense management.",
        tags: ["JavaScript", "Chart.js", "Firebase"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Smart Notes",
        description: "A markdown-supported notes application with search functionality and tag organization system.",
        tags: ["React", "Markdown", "Search Algo"],
        links: { github: "#", demo: "#" }
    }
];

const ProjectCard = ({ project, index }) => {
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

            <div className="p-8 relative z-10 flex flex-col h-full" style={{ transform: "translateZ(50px)" }}>
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                        <Folder className="text-blue-400" size={24} />
                    </div>
                    <div className="flex gap-4">
                        <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
