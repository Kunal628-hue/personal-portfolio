import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

const HeroProfile = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
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
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
            {/* Spinning Gradient Border */}
            <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-md opacity-75" style={{ transform: "translateZ(-20px)" }}></div>

            {/* Stronger Background Glow */}
            <div className="absolute inset-0 bg-blue-500/40 rounded-full blur-[60px] animate-pulse" style={{ transform: "translateZ(-50px)" }}></div>

            {/* Image Container with Float */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl z-10 transform-style-3d bg-black"
                style={{ transform: "translateZ(20px)" }}
            >
                <img
                    src="/profile.jpg"
                    alt="Kunal Singhi"
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Inner Glow to blend edges */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] rounded-full pointer-events-none"></div>
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent text-white pt-20 pb-10">
            {/* 3D Canvas Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 5, 2]} intensity={1.5} />
                    <pointLight position={[-2, -2, 2]} intensity={1} color="#f472b6" />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <AnimatedSphere />
                    <FloatingShapes />

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 2.5} />
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center perspective-1000">

                {/* Left Column: Text */}
                <div className="order-2 md:order-1 text-center md:text-left select-none pointer-events-none mix-blend-screen">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-xl md:text-2xl font-light text-blue-300 mb-2 tracking-widest uppercase">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl">
                            <TextScramble text="Kunal Singhi" />
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 tracking-tight">
                                Turning Code into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Real-World Solutions</span>
                            </h3>
                            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                                B.Tech CSE Student | Software & Robotics Enthusiast building real-world solutions
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pointer-events-auto flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
                    >
                        <MagneticWrapper className="block">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border border-white/30 text-white font-bold py-3 px-8 rounded-full backdrop-blur-md transition-all block min-w-[160px] text-center"
                            >
                                View Work
                            </motion.a>
                        </MagneticWrapper>
                        <MagneticWrapper className="block">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold py-3 px-8 rounded-full backdrop-blur-md transition-all block min-w-[160px] text-center"
                            >
                                Contact Me
                            </motion.a>
                        </MagneticWrapper>
                    </motion.div>
                </div>

                {/* Right Column: Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                    <HeroProfile />
                </div>
            </div>
        </section>
    );
};

export default Hero;
