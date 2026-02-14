import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CouplePhoto from './components/CouplePhoto';
import Timeline from './components/Timeline';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <CouplePhoto />
      <Timeline />
      <Wishes />
      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;
