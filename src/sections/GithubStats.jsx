import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Typewriter from '../components/Typewriter';
import { GitHubCalendar } from 'react-github-calendar';

const GithubStats = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                animate('.github-reveal', {
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: 150,
                    ease: 'easeOutExpo',
                    duration: 1000
                });
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Custom theme for the calendar to match the dark aesthetic
    const explicitTheme = {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <section id="github-stats" ref={sectionRef} className="py-20 bg-[#030014] text-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 github-reveal opacity-0">
                    <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4 tracking-tighter uppercase">
                        GitHub <span className="opacity-70">Stats</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto h-[50px] md:h-auto flex items-center justify-center">
                        <Typewriter text="Consistency is key. My open source contributions and coding streak." delay={400} />
                    </p>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center github-reveal opacity-0 h-full">
                    {/* GitHub Profile Box */}
                    <div className="flex flex-col items-center p-8 bg-gray-900/40 rounded-3xl border border-white/5 hover:border-green-500/50 transition-all duration-500 group relative overflow-hidden w-full md:w-1/3">
                        <div className="absolute inset-0 z-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <a 
                            href="https://github.com/Kunal628-hue" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative z-10 flex flex-col items-center"
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-green-400 transition-all duration-500 mb-4">
                                <img 
                                    src="https://github.com/Kunal628-hue.png" 
                                    alt="GitHub Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">Kunal Singhi</h3>
                            <p className="text-sm font-black text-gray-500 tracking-[0.2em] uppercase mb-4">@Kunal628-hue</p>
                            <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer text-gray-300">
                                View Profile
                            </span>
                        </a>
                    </div>

                    {/* GitHub Calendar Box */}
                    <div className="flex-1 p-8 bg-gray-900/40 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center w-full relative group hover:border-blue-500/50 transition-all duration-500">
                        <div className="absolute inset-0 z-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_50px_rgba(59,130,246,0)] group-hover:shadow-[inset_0_0_50px_rgba(59,130,246,0.1)]"></div>
                        <div className="relative z-10 w-full overflow-x-auto overflow-y-hidden invisible-scrollbar pb-4 flex justify-center">
                            <GitHubCalendar 
                                username="Kunal628-hue" 
                                colorScheme="dark"
                                theme={explicitTheme}
                                blockSize={12}
                                blockMargin={4}
                                fontSize={14}
                                style={{
                                    color: '#9ca3af'
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* GitHub Activity Graph */}
                <div className="max-w-4xl mx-auto mt-8 flex justify-center github-reveal opacity-0">
                    <div className="w-full p-8 bg-gray-900/40 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center relative group hover:border-purple-500/50 transition-all duration-500">
                        <div className="absolute inset-0 z-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_50px_rgba(168,85,247,0)] group-hover:shadow-[inset_0_0_50px_rgba(168,85,247,0.1)]"></div>
                        <div className="relative z-10 w-full overflow-hidden flex justify-center">
                            <img 
                                src="https://github-readme-activity-graph.vercel.app/graph?username=Kunal628-hue&bg_color=030014&color=9ca3af&line=3b82f6&point=10b981&area=true&hide_border=true&hide_title=true" 
                                alt="GitHub Activity Line Graph" 
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
