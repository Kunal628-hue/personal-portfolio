import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.2; // Keep it low and comfortable

        const playAudio = async () => {
            try {
                // We attempt to play, but standard browser autoplay will block
                // This doesn't affect scores as much as we used to think, 
                // but we keep it asynchronous.
                await audio.play();
                setIsPlaying(true);
            } catch (err) {
                setIsPlaying(false);
            }
        };

        playAudio();
    }, []);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            try {
                await audio.play();
                setIsPlaying(true);
                setHasInteracted(true);
            } catch (err) {
                console.error("Playback failed:", err);
            }
        }
    };

    return (
        <div className="fixed bottom-24 right-6 z-[100] group">
            <audio ref={audioRef} loop preload="none">
                <source src="/bg-music.mp3" type="audio/mp3" />
            </audio>

            <button
                onClick={togglePlay}
                className={`
          flex items-center gap-2 p-3 rounded-full backdrop-blur-md border transition-all duration-300
          ${isPlaying
                        ? 'bg-blue-500/20 border-blue-500/50 text-blue-400 hover:bg-blue-500/30'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}
        `}
            >
                {isPlaying ? (
                    <>
                        <Volume2 className="w-5 h-5 animate-pulse" />
                        <span className="text-xs font-bold hidden group-hover:block px-1">Playing</span>
                    </>
                ) : (
                    <>
                        <VolumeX className="w-5 h-5" />
                        <span className="text-xs font-bold hidden group-hover:block px-1">Muted</span>
                    </>
                )}
            </button>

            {!hasInteracted && !isPlaying && (
                <div className="absolute bottom-full right-0 mb-2 w-max bg-black/80 text-white text-[10px] px-2 py-1 rounded-sm animate-bounce font-black uppercase tracking-widest border border-white/10">
                    Play Music 🎵
                </div>
            )}
        </div>
    );
};

export default BackgroundMusic;
