import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Atom } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Torus, OrbitControls, Stars } from '@react-three/drei';

const EducationCard = ({ icon: Icon, title, period, school, description, tags, delay, color }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-6 items-start hover:border-white/20 transition-colors"
    >
        <div className={`p-4 bg-${color}-600/20 rounded-xl`}>
            <Icon className={`text-${color}-400`} size={32} />
        </div>
        <div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
                <span className={`px-3 py-1 bg-${color}-500/20 text-${color}-300 text-xs font-bold rounded-full w-fit whitespace-nowrap`}>
                    {period}
                </span>
            </div>
            <p className="text-lg text-gray-300 mb-4">{school}</p>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                {description}
            </p>
            {tags && (
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </motion.div>
);

const FloatingGeo = () => {
    return (
        <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
            <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                {/* Outer Wireframe */}
                <Icosahedron args={[2.2, 2]}>
                    <meshStandardMaterial
                        color="#3b82f6"
                        wireframe
                        transparent
                        opacity={0.3}
                        roughness={0}
                        metalness={1}
                    />
                </Icosahedron>

                {/* Inner Glowing Core */}
                <Icosahedron args={[1.5, 4]}>
                    <MeshDistortMaterial
                        color="#60a5fa"
                        distort={0.4}
                        speed={3}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Icosahedron>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                <Torus args={[3, 0.05, 16, 100]} rotation={[1.5, 0, 0]}>
                    <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2} />
                </Torus>
            </Float>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Education <span className="text-blue-500">&</span> Learning</h2>
                            <p className="text-gray-400">My academic journey and milestones.</p>
                        </motion.div>

                        <div className="space-y-6">
                            {/* B.Tech */}
                            <EducationCard
                                icon={GraduationCap}
                                title="B.Tech Computer Science"
                                period="2025 - Present"
                                school="Polaris School of Technology"
                                description="Currently in first year, building a strong foundation in programming, data structures, and computer architecture."
                                color="blue"
                                delay={0.1}
                            />

                            {/* Class XI-XII */}
                            <EducationCard
                                icon={School}
                                title="Senior Secondary (XI–XII)"
                                period="Science Stream"
                                school="St. Mary’s Junior College, Hyderabad"
                                description="Focused on Physics, Chemistry, and Mathematics (PCM). Balanced board curriculum with competitive exam preparation."
                                tags={["PCM", "Competitive Prep"]}
                                color="purple"
                                delay={0.2}
                            />

                            {/* JEE Coaching */}
                            <EducationCard
                                icon={Atom}
                                title="JEE Preparation"
                                period="Coaching"
                                school="Physics Wallah (PW)"
                                description="Intensive preparation in Physics, Chemistry, and Math. Developed strong problem-solving discipline and conceptual clarity."
                                tags={["Problem Solving", "Analytical Skills"]}
                                color="yellow"
                                delay={0.3}
                            />

                            {/* Class X */}
                            <EducationCard
                                icon={BookOpen}
                                title="Secondary Education (Class X)"
                                period="Schooling"
                                school="Gitanjali Devshala, Hyderabad"
                                description="Built a strong academic foundation with active participation in extracurriculars."
                                color="pink"
                                delay={0.4}
                            />
                        </div>
                    </div>

                    {/* 3D Visual Column (Desktop) */}
                    <div className="hidden lg:block lg:col-span-1 relative h-full min-h-[500px]">
                        <div className="sticky top-20 h-[500px] w-full">
                            <FloatingGeo />
                            <div className="absolute bottom-10 left-0 right-0 text-center">
                                <p className="text-blue-400 font-mono text-sm tracking-widest">KNOWLEDGE STRUCTURE</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
