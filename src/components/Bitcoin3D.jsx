import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const Bitcoin3D = () => {
    const coinRef = useRef(null);

    useEffect(() => {
        if (!coinRef.current) return;

        // Continuous rotation
        animate(coinRef.current, {
            rotateY: '360deg',
            duration: 8000,
            loop: true,
            easing: 'linear'
        });

        // Floating effect
        animate(coinRef.current, {
            translateY: [-15, 15],
            duration: 3000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });

        // Shadow scale effect
        animate('.coin-shadow', {
            scale: [0.8, 1.2],
            opacity: [0.3, 0.1],
            duration: 3000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });
    }, []);

    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center perspective-1000 select-none">
            {/* Golden Glow Atmosphere */}
            <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-[100px] animate-pulse"></div>

            {/* The Coin */}
            <div
                ref={coinRef}
                className="relative w-48 h-48 md:w-64 md:h-64"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700] via-[#FDB931] to-[#D4AF37] border-4 border-[#FDB931]/50 shadow-[0_0_50px_rgba(255,215,0,0.4)] flex items-center justify-center overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'translateZ(10px)' }}
                >
                    {/* Inner Decorative Ring */}
                    <div className="absolute inset-2 border-2 border-[#FDB931]/40 rounded-full"></div>
                    <div className="absolute inset-4 border border-[#FDB931]/20 rounded-full"></div>

                    {/* Bitcoin Symbol */}
                    <div className="relative z-10 p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-xl">
                        <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-24 md:h-24 text-white fill-current drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
                            <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.556.362 9.103 1.962 2.67 8.472-1.24 14.9-.36c5.18.29 11.134 4.54 8.738 15.264zm-3.525-4.57c.307-2.05-1.253-3.153-3.386-3.89l.692-2.776-1.69-.42-.673 2.7c-.444-.11-.9-.214-1.352-.317l.68-2.726-1.69-.42-.693 2.78c-.368-.083-.73-.164-1.082-.25l.002-.01-2.333-.582-.45 1.806s1.256.287 1.23.305c.685.17.81.623.79.983l-.79 3.172c.047.012.11.028.178.053-.15-.038-.31-.077-.474-.12l-1.107 4.444c-.083.208-.296.52-.773.4l-1.23-.307-.84 1.928 2.2.55c.41.102.812.21 1.206.313l-.702 2.81 1.69.423.692-2.776c.46.126.91.246 1.35.362l-.687 2.756 1.69.422.7-2.81c2.885.546 5.057.326 5.97-2.284.733-2.1.034-3.313-1.487-4.102 1.106-.255 1.94-.984 2.162-2.485zm-3.834 5.43c-.524 2.11-4.067.97-5.216.684l.93-3.733c1.15.286 4.84.852 4.286 3.048zm.523-5.462c-.477 1.914-3.427.942-4.385.7l.842-3.38c.958.238 4.032.684 3.542 2.68z" />
                        </svg>
                    </div>

                    {/* Metallic Shine Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FDB931] to-[#FFD700] border-4 border-[#FDB931]/50 flex items-center justify-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(10px)' }}
                >
                    <div className="absolute inset-4 border-2 border-[#FDB931]/30 rounded-full"></div>
                    <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-24 md:h-24 text-white fill-current opacity-80">
                        <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.556.362 9.103 1.962 2.67 8.472-1.24 14.9-.36c5.18.29 11.134 4.54 8.738 15.264zm-3.525-4.57c.307-2.05-1.253-3.153-3.386-3.89l.692-2.776-1.69-.42-.673 2.7c-.444-.11-.9-.214-1.352-.317l.68-2.726-1.69-.42-.693 2.78c-.368-.083-.73-.164-1.082-.25l.002-.01-2.333-.582-.45 1.806s1.256.287 1.23.305c.685.17.81.623.79.983l-.79 3.172c.047.012.11.028.178.053-.15-.038-.31-.077-.474-.12l-1.107 4.444c-.083.208-.296.52-.773.4l-1.23-.307-.84 1.928 2.2.55c.41.102.812.21 1.206.313l-.702 2.81 1.69.423.692-2.776c.46.126.91.246 1.35.362l-.687 2.756 1.69.422.7-2.81c2.885.546 5.057.326 5.97-2.284.733-2.1.034-3.313-1.487-4.102 1.106-.255 1.94-.984 2.162-2.485zm-3.834 5.43c-.524 2.11-4.067.97-5.216.684l.93-3.733c1.15.286 4.84.852 4.286 3.048zm.523-5.462c-.477 1.914-3.427.942-4.385.7l.842-3.38c.958.238 4.032.684 3.542 2.68z" />
                    </svg>
                </div>

                {/* The Edge (Thickness) - Multiple layers for depth */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 rounded-full border-[1px] border-[#B8860B]"
                        style={{
                            transform: `translateZ(${i - 6}px)`,
                            backgroundColor: i === 6 ? '#FDB931' : '#B8860B',
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                        }}
                    ></div>
                ))}
            </div>

            {/* Dynamic Shadow */}
            <div className="coin-shadow absolute bottom-[-40px] w-32 h-8 bg-black/40 rounded-[100%] blur-xl pointer-events-none"></div>

            {/* Label */}
            <div className="absolute -bottom-16 text-xs font-black tracking-[0.3em] text-yellow-500/60 uppercase text-center w-full">
                Decentralized Future
            </div>
        </div>
    );
};

export default Bitcoin3D;
