import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Vcodez, Chennai",
      duration: "01-07-2025 - 31-07-2025",
      description: "Worked on preparing datasets, developing models, and testing their performance. Gained practical exposure to applying machine learning methods in real-world scenarios and strengthened programming and analytical skills."
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Vulture Lines Tech Pvt Ltd, Chennai",
      duration: "17.02.2025 - 19.03.2025",
      description: "Worked on developing and maintaining web applications in an online mode, gaining hands-on experience in the software development lifecycle and enhancing problem-solving abilities."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 relative pl-8 sm:pl-0"
            >
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              <div className={`sm:flex items-center justify-between w-full ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                <div className="hidden sm:block w-5 h-5 absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-white dark:border-gray-900 bg-indigo-600 z-10 shadow"></div>
                
                <div className="sm:w-[calc(50%-2rem)] mb-4 sm:mb-0 relative">
                  <div className="sm:hidden absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 bg-indigo-600 z-10"></div>
                  <div className="sm:hidden absolute -left-[1.625rem] top-4 bottom-[-2rem] w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                      <Briefcase size={18} className="text-indigo-600 dark:text-indigo-400" />
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
