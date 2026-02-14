import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CouplePhoto from './components/CouplePhoto';
import Timeline from './components/Timeline';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.play().catch(e => console.log("Audio play failed", e));
    }
    setIsOpen(true);
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pink-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Heart className="w-20 h-20 text-pink-500 mx-auto mb-6 animate-pulse" fill="currentColor" />
              <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-8">
                25th Anniversary Celebration
              </h1>
              <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                We've prepared a special experience for you. Please enable sound for the best experience.
              </p>
              <button
                onClick={handleOpen}
                className="bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-serif hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Open Wishes
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={!isOpen ? 'h-screen overflow-hidden' : ''}>
        <Navbar />
        <Hero />
        <CouplePhoto />
        <Timeline />
        <Wishes />
        <Footer />
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
