import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import TextScramble from '../components/TextScramble';
import MagneticWrapper from '../components/MagneticWrapper';
import FloatingShapes from '../components/FloatingShapes';

const AnimatedSphere = () => {
    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere visible args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color="#4F46E5"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent text-white">
            {/* 3D Canvas Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 5, 2]} intensity={1.5} />
                    <pointLight position={[-2, -2, 2]} intensity={1} color="#f472b6" />

                    <AnimatedSphere />
                    <FloatingShapes />

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 2.5} />
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="z-10 text-center max-w-4xl mx-auto px-4 select-none pointer-events-none mix-blend-screen">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-xl md:text-2xl font-light text-blue-300 mb-2 tracking-widest uppercase">
                        Hello, I'm
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl">
                        <TextScramble text="Kunal Singhi" />
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
                    <div className="relative">
                        <h3 className="text-2xl md:text-4xl font-bold text-gray-100 mb-6 tracking-tight">
                            Turning Code into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Real-World Solutions</span>
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            B.Tech CSE Student | Software & Robotics Enthusiast building real-world solutions
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pointer-events-auto flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <MagneticWrapper className="block">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border border-white/30 text-white font-bold py-4 px-16 rounded-full backdrop-blur-md transition-all block min-w-[200px]"
                        >
                            View Work
                        </motion.a>
                    </MagneticWrapper>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
