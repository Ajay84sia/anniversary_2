import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import audio from '../assets/song.mp3'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Attempt to auto-play on mount if allowed (usually blocked by browsers until interaction)
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.log("Auto-play prevented:", err);
        setIsPlaying(false);
      }
    };

    // Optional: Try to play on first click anywhere
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current && !isPlaying) {
         playAudio();
         setHasInteracted(true);
      }
    };

    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, [hasInteracted, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio 
        id="bg-music"
        ref={audioRef} 
        loop 
        src={audio} 
      />
      <button
        onClick={togglePlay}
        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 text-pink-500 hover:scale-110 transition-transform duration-300"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Volume2 className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AudioPlayer;
