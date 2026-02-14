import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-xl mb-4">Celebrating 25 Years of Love & Togetherness</p>
        <div className="flex justify-center items-center gap-2 text-gray-400 text-sm">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>by AJAY CHAURASIA</span>
        </div>
        <p className="mt-2 text-xs text-gray-500">© {new Date().getFullYear()} Anniversary Celebration</p>
      </div>
    </footer>
  );
};

export default Footer;
