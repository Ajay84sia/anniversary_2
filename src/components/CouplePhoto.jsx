import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/img.jpeg'

const CouplePhoto = () => {
  return (
    <section id="couple" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/2 relative group">
            {/* Decorative Frame */}
            <div className="absolute inset-0 bg-gray-200 transform rotate-3 rounded-lg shadow-lg group-hover:rotate-0 transition-all duration-500"></div>
            <div className="relative z-10 bg-white p-4 rounded-lg shadow-xl transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
              <div className="aspect-[4/5] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                 {/* Placeholder for user image */}
                 <div className="text-center text-gray-400">
                    <p className="text-4xl mb-2"><img src={img} alt="img" /></p>
                 </div>
                 {/* Example image usage: <img src="/path/to/image.jpg" alt="Couple" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">The Beautiful Couple</h2>
            <div className="w-20 h-1 bg-pink-400 mx-auto md:mx-0 mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Twenty-five years ago, two souls became one. Through all the seasons of life, your love has only grown stronger, shining brighter with each passing year. You are an inspiration to all of us.
            </p>
            <p className="font-serif text-2xl text-gray-800 italic">
              "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CouplePhoto;
