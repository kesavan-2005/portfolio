import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "Java", category: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", category: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML & CSS", category: "Front-End", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "React.js", category: "Front-End", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git & GitHub", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", category: "Design Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Streamlit", category: "Framework", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
  ];

  const certifications = [
    "Fundamentals of Java Programming (Coursera)",
    "Java Masterclass (Udemy)",
    "Crash Course on Python (Coursera)",
    "Machine Learning with Python (IBM)",
    "Generative AI: Prompt Engineering (IBM)",
    "Foundations of UX Design (Google)",
    "Data Analytics Job Simulation (Deloitte)"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Technical Skills Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center lg:text-left">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="w-12 h-12 p-2 rounded-xl bg-gray-50 dark:bg-gray-700 group-hover:bg-indigo-50 dark:group-hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter dark:invert-0" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center lg:text-left">Certifications</h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 h-full">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-relaxed">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
