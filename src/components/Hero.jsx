import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-20"></div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Hello, I'm
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kesavan <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">R</span>
          </motion.h1>
          
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Innovative developer with a strong background in web technologies and a growing passion for integrating machine learning. Dedicated to creating scalable, efficient, and future-ready digital products.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Kesavan_R_Resume.pdf" 
              download
              className="px-8 py-3 w-full sm:w-auto text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
            >
              <ArrowDown size={18} />
              Download CV
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                className="px-8 py-3 w-full block text-center text-base font-medium rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:text-indigo-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all cursor-pointer border border-indigo-100 dark:border-gray-700"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a href="https://github.com/kesavan-2005" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/kesavan160425" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kesavankesavanrajini@gmail.com" className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors p-2" aria-label="Email">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
