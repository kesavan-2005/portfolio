import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech – Information Technology",
      institution: "Arunai Engineering College",
      duration: "2022–2026",
      score: "GPA: 8.7"
    },
    {
      degree: "Class XII",
      institution: "Mary Immaculate Heart Matric Hr Sec School",
      duration: "2021–2022",
      score: "HSC: 85.8%"
    },
    {
      degree: "Class X",
      institution: "Mary Immaculate Heart Matric Hr Sec School",
      duration: "2019–2020",
      score: "SSLC: 92.6%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Summary & Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mb-8 aspect-auto sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0 group">
              <img 
                src="/profile.jpg" 
                alt="Kesavan R - Profile" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply"></div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Code className="text-indigo-600 dark:text-indigo-400" />
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Innovative Full Stack Developer with a strong background in web technologies and a growing passion for integrating machine learning into modern applications. Skilled in building seamless end-to-end solutions, enhancing user experiences with intelligent features, and leveraging data-driven insights. Dedicated to creating scalable, efficient, and future-ready digital products.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="text-indigo-600 dark:text-indigo-400" />
              Education History
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-200 dark:before:via-indigo-800 before:to-transparent">
              
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-900 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                    <div className="w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-400 rounded-full group-hover:bg-white"></div>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl shadow border border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-gray-900 dark:text-white">{edu.degree}</div>
                    </div>
                    <div className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">{edu.duration}</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-semibold bg-gray-100 dark:bg-gray-700 inline-block px-2 py-1 rounded">
                      {edu.score}
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
