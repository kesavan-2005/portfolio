import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-800 pb-12">
          
          {/* Logo & Info */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer font-extrabold text-3xl tracking-tighter mb-4 inline-block">
              <span className="text-white">Kesavan </span><span className="text-indigo-500">R.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mt-2 text-sm">
              Creating scalable, efficient, and future-ready digital products with a seamless integration of Web Tech and Machine Learning.
            </p>
          </div>

          {/* Socials & Top */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/kesavan-2005" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/kesavan160425" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              className="cursor-pointer flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Back to Top
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <ArrowUp size={16} />
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Kesavan R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
