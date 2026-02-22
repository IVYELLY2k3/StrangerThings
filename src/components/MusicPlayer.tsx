import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    console.log("Audio started playing");
                })
                .catch((err) => {
                    console.error("Audio play failed:", err);
                });
        }
    };

    useEffect(() => {
        // Attempt autoplay
        playAudio();

        // Interaction fallback
        const handleInteraction = () => {
            if (!isPlaying) {
                playAudio();
            }
            // We keep the listeners to ensure we catch the first real interaction
            // but we can remove them once playing is confirmed
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);
        window.addEventListener('scroll', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
        };
    }, [isPlaying]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                playAudio();
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <button
                onClick={togglePlay}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/80 border border-red-600/50 text-red-600 hover:bg-red-900/40 hover:border-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] group"
                title={isPlaying ? "Mute Theme" : "Play Theme"}
            >
                {isPlaying ? (
                    <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                ) : (
                    <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-500" />
                )}
            </button>
            <audio
                ref={audioRef}
                loop
                preload="auto"
                src="/theme.mp3"
                id="stranger-things-audio"
            />
        </div>
    );
}
