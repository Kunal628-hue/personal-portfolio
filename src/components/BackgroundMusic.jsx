import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.4;

        const playAudio = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (err) {
                console.log("Autoplay blocked:", err);
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
        <div className="fixed bottom-24 right-6 z-[100]">
            <audio ref={audioRef} loop preload="auto">
                <source src="/bg-music.mp3" type="audio/mp3" />
            </audio>

            <button
                onClick={togglePlay}
                className={`
          flex items-center gap-2 p-3 rounded-full backdrop-blur-md border transition-all duration-300
          ${isPlaying
                        ? 'bg-primary/20 border-primary/50 text-primary hover:bg-primary/30'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}
        `}
            >
                {isPlaying ? (
                    <>
                        <Volume2 className="w-5 h-5 animate-pulse" />
                        <span className="text-xs font-medium hidden group-hover:block">Playing</span>
                    </>
                ) : (
                    <>
                        <VolumeX className="w-5 h-5" />
                        <span className="text-xs font-medium hidden group-hover:block">Muted</span>
                    </>
                )}
            </button>

            {!hasInteracted && !isPlaying && (
                <div className="absolute bottom-full right-0 mb-2 w-max bg-black/80 text-white text-xs px-3 py-1 rounded-lg animate-bounce">
                    Click to play music 🎵
                </div>
            )}
        </div>
    );
};

export default BackgroundMusic;
