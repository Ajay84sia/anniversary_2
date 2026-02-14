import React from 'react';
import { motion } from 'framer-motion';

const Wishes = () => {
  return (
    <section id="wishes" className="py-20 bg-[#ffc0cb] text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold mb-8">Warmest Wishes</h2>
          <div className="text-xl md:text-2xl italic font-serif leading-relaxed mb-8">
            "May your bond continue to grow stronger with each passing day. 
            May your life be filled with more laughter, joy, and peace. 
            Here's to another 25 years of happiness together!"
          </div>
          <p className="text-lg font-medium opacity-80">Chaurasia Family</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Wishes;
