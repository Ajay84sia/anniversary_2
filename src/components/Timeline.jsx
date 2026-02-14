import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Gift, Calendar } from 'lucide-react';

const milestones = [
  { year: '15 Feb 2001', title: 'The Beginning', description: 'Two hearts became one, starting a beautiful journey together.', icon: <Heart /> },
  { year: '15 Feb 2006', title: '5 Years of Togetherness', description: 'Building a home filled with love and laughter.', icon: <Star /> },
  { year: '15 Feb 2016', title: 'Crystal Anniversary', description: '15 years of shared dreams and conquered challenges.', icon: <Gift /> },
  { year: '15 Feb 2026', title: 'Silver Jubilee', description: '25 glorious years of an unbreakable bond.', icon: <Calendar /> },
];

const Timeline = () => {
  return (
    <section id="journey" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-800">Our Journey</h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start group-hover:items-start' : 'md:items-end'} items-center`}>
                     <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full md:max-w-md border-t-4 border-pink-400">
                        <div className="flex items-center gap-3 mb-2">
                           <span className="p-2 bg-pink-50 text-pink-500 rounded-full">{milestone.icon}</span>
                           <span className="text-2xl font-bold text-gray-800">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-serif font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                     </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-500 rounded-full border-4 border-white shadow flex items-center justify-center z-10 hidden md:flex">
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
