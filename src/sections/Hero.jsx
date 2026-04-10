import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import MagneticWrapper from '../components/MagneticWrapper';
import Anime3DShapes from '../components/Anime3DShapes';
import Typewriter from '../components/Typewriter';

const HeroProfile = () => {
    const profileRef = useRef(null);
    const innerRef = useRef(null);

    useEffect(() => {
        // Entrance Animation
        animate(profileRef.current, {
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 1500,
            delay: 500,
            easing: 'easeOutExpo'
        });
    }, []);

    const handleMouseMove = (e) => {
        if (window.innerWidth < 1024) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) * 0.1;
        const y = (e.clientY - (rect.top + rect.height / 2)) * 0.1;

        if (profileRef.current) {
            profileRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
        }
    };

    const handleMouseLeave = () => {
        if (profileRef.current) {
            profileRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        }
    };

    return (
        <div
            ref={profileRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transform-gpu transition-transform duration-300 ease-out opacity-0"
            style={{ transformStyle: "preserve-3d" }}
        >
            <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-md opacity-30 animate-pulse" style={{ transform: "translateZ(-20px)" }}></div>
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px]" style={{ transform: "translateZ(-50px)" }}></div>
            
            <div
                ref={innerRef}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10 transform-style-3d bg-black animate-float"
                style={{ transform: "translateZ(20px)" }}
            >
                <img
                    src="/profile.jpg"
                    alt="Kunal Singhi"
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-in-out"
                    fetchPriority="high"
                    loading="eager"
                    width="400"
                    height="400"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] rounded-full pointer-events-none"></div>
            </div>
        </div>
    );
};

const Hero = () => {
    useEffect(() => {
        animate('.hero-welcome', {
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: 300
        });

        animate('.hero-name', {
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutExpo',
            delay: 600
        });

        animate('.hero-subtitle-text', {
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: 1500
        });

        animate('.hero-cta', {
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: stagger(100, { start: 1800 })
        });
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030014] text-white pt-20 pb-10">
            <Anime3DShapes />

            <div className="z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center perspective-1000 relative">
                <div className="order-2 md:order-1 text-center md:text-left select-none relative z-30">
                    <div className="mb-8">
                        <h2 className="hero-welcome text-lg md:text-2xl font-bold text-blue-400 mb-2 tracking-[0.2em] uppercase opacity-0">
                            Hello, I'm
                        </h2>
                        <h1 className="hero-name text-5xl md:text-7xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl leading-none py-2 opacity-0">
                             Kunal Singhi
                        </h1>
                    </div>

                    <div className="relative mb-12">
                        <h3 className="hero-subtitle-text text-xl md:text-3xl font-black text-gray-100 mb-6 tracking-tight opacity-0">
                            Turning Code into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Real-World Solutions</span>
                        </h3>
                        <p className="hero-subtitle-text text-lg text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 opacity-0 font-medium h-[60px] md:h-auto">
                            <Typewriter text="B.Tech CSE Student | Admin @ Coder's OG's | Software & Robotics Enthusiast building real-world solutions" delay={1600} />
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
                        <MagneticWrapper className="hero-cta opacity-0">
                            <a
                                href="#projects"
                                className="bg-white text-black font-black py-4 px-10 rounded-full hover:scale-105 transition-all block min-w-[150px] text-center shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            >
                                View Work
                            </a>
                        </MagneticWrapper>
                        <MagneticWrapper className="hero-cta opacity-0">
                            <a
                                href="#contact"
                                className="bg-[#0f172a]/80 border border-white/10 text-white font-bold py-4 px-10 rounded-full backdrop-blur-md hover:bg-white/10 transition-all block min-w-[150px] text-center"
                            >
                                Contact Me
                            </a>
                        </MagneticWrapper>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                    <HeroProfile />
                </div>
            </div>
        </section>
    );
};

export default Hero;
