import React, { useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, ArrowLeft, Download, ExternalLink, GraduationCap, Briefcase, Award, Code, Database, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumePage = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            title: "Global Notes Workspace",
            year: "2025",
            description: [
                "Developed an AI-powered productivity workspace designed for centralized note-taking and knowledge storage",
                "Integrated AI capabilities for automated note organization and content summarization to enhance user efficiency",
                "Built a responsive UI ensuring seamless access and consistent performance across various devices"
            ]
        },
        {
            title: "Planora Smart Event OS",
            year: "2026",
            description: [
                "Engineered a comprehensive event management SaaS platform focused on streamlining planning and execution",
                "Implemented features for real-time attendee management, intelligent scheduling, and resource coordination",
                "Designed a robust architecture to support concurrent users and ensure system stability during events"
            ]
        },
        {
            title: "Personal Finance Manager",
            year: "2025",
            description: [
                "Created a personal finance application to help users monitor and manage their income, expenses, and budgets",
                "Implemented data-driven visualization components to provide users with clear insights into their financial status",
                "Ensured a focus on security and data integrity for sensitive personal financial information"
            ]
        },
        {
            title: "Personal Portfolio Website",
            year: "2025",
            description: [
                "Developed a modern personal portfolio website to showcase technical projects, skills, and professional growth",
                "Utilized high-performance web components and responsive design principles for optimized user engagement"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-8 lg:p-12 selection:bg-blue-100 pb-24">
            {/* Control Bar */}
            <div className="max-w-4xl mx-auto mb-12 flex justify-between items-center no-print">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-lg"
                >
                    <ArrowLeft size={18} />
                    Back to Portfolio
                </button>
                <div className="flex gap-4">
                    <button 
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                    >
                        <Download size={18} />
                        Print / Save PDF
                    </button>
                </div>
            </div>

            {/* Resume Sheet */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto bg-white p-8 md:p-16 border border-gray-100 shadow-[0_0_50px_rgba(0,0,0,0.05)] rounded-2xl relative overflow-hidden"
            >
                {/* Header */}
                <header className="text-center mb-12 border-b border-gray-100 pb-12">
                    <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase">Kunal Singhi</h1>
                    <p className="text-lg text-blue-600 font-bold mb-8 uppercase tracking-[0.2em]">Software Development Student | Aspiring Full Stack Developer</p>
                    
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-500">
                        <a href="tel:+919246269410" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Phone size={14} /> +91 9246269410</a>
                        <a href="mailto:imsinghi2016@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Mail size={14} /> imsinghi2016@gmail.com</a>
                        <a href="https://github.com/Kunal628-hue" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Github size={14} /> Kunal628-hue</a>
                        <a href="https://linkedin.com/in/kunal-singhi-jain" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Linkedin size={14} /> Kunal Singhi Jain</a>
                    </div>
                </header>

                <div className="space-y-12">
                    {/* Education */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="text-blue-600" size={24} />
                            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest border-b-2 border-blue-600 pb-1">Education</h2>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Polaris School of Technology</h3>
                                <p className="text-blue-600 font-bold italic">Bachelor of Technology in Computer Science</p>
                                <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600 text-sm leading-relaxed">
                                    <li>Actively learning foundational Computer Science concepts and modern software engineering practices</li>
                                    <li>Applying technical skills through academic projects and collaborative development environments</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">2025 – 2029</p>
                                <p className="text-gray-500 text-sm uppercase font-bold tracking-wider">India</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="text-blue-600" size={24} />
                            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest border-b-2 border-blue-600 pb-1">Projects</h2>
                        </div>
                        <div className="space-y-8">
                            {projects.map((project, idx) => (
                                <div key={idx} className="relative pl-6 border-l-2 border-gray-100">
                                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600" />
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                                        <p className="font-bold text-gray-600 text-sm">{project.year}</p>
                                    </div>
                                    <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                                        {project.description.map((line, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-blue-600 font-bold">—</span>
                                                {line}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-blue-600" size={24} />
                            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest border-b-2 border-blue-600 pb-1">Certifications</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Data Science and Machine Learning</h3>
                                    <p className="text-gray-600 text-sm">— Successfully completed a certification through <span className="font-bold">Wayspire</span>, gaining experience in data analysis and ML models</p>
                                </div>
                                <p className="font-bold text-gray-600 text-sm">2025</p>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Robotics Engineering</h3>
                                    <p className="text-gray-600 text-sm">— Acquired specialized knowledge in robotic systems and automated hardware control through <span className="font-bold">Leep Robotics</span></p>
                                </div>
                                <p className="font-bold text-gray-600 text-sm">2023</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="bg-gray-50 -mx-8 md:-mx-16 p-8 md:px-16 mb-[-1px]">
                        <div className="flex items-center gap-3 mb-6">
                            <Code className="text-blue-600" size={24} />
                            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest border-b-2 border-blue-600 pb-1">Technical Arsenal</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-black text-gray-400 uppercase tracking-wider mb-3"><Code size={14} /> Languages & Frameworks</h4>
                                <p className="text-gray-700 font-medium">JavaScript, Python, Java, HTML, CSS, SQL, React.js, Node.js, Tailwind CSS</p>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-black text-gray-400 uppercase tracking-wider mb-3"><Database size={14} /> Databases & Tools</h4>
                                <p className="text-gray-700 font-medium">MySQL, MongoDB, Figma, Git, Robotics, Data Science (Basics)</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer Decor */}
                <div className="absolute bottom-0 right-0 p-8 opacity-5">
                    <MousePointer2 size={120} />
                </div>
            </motion.div>
        </div>
    );
};

export default ResumePage;
