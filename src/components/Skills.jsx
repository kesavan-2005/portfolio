import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
    { name: "Fundamentals of Java Programming (Coursera)", link: "https://drive.google.com/file/d/1PedNb7bm7VtGY6z2JiVQLCQRb1Sx0Kco/view?usp=drive_link" },
    { name: "Java for Beginners (Udemy)", link: "https://drive.google.com/file/d/1EFGfFzuu1HlCCb_XvktsiowCi6Sl8ohN/view?usp=drivesdk" },
    { name: "Java Masterclass (Udemy)", link: "https://drive.google.com/file/d/1EK9dUa2m4RkE7_qxZW3qUkb6kA6KF3SL/view?usp=drivesdk" },
    { name: "Crash Course on Python (Coursera)", link: "https://drive.google.com/file/d/1SnuYlDR_FhOiYO4jBKRUIgxJ2YCBI8or/view?usp=drivesdk" },
    { name: "Generative AI: Prompt Engineering (IBM)", link: "https://drive.google.com/file/d/12k-V0tiCzy4XVQGe9r7_7aJ8uEWVhZUD/view?usp=drive_link" },
    { name: "Foundations of UX Design (Google)", link: "https://drive.google.com/file/d/1zjuaW8mcaDv48LWOYk6TZcmlkr-yWG56/view?usp=drive_link" },
    { name: "GenAI Powered Data Analytics Job Simulation (TATA)", link: "https://drive.google.com/file/d/1UeO8HDWiMDuu8JXmf1lLjjkfNHt4Iq6-/view?usp=drive_linkk" },
    { name: "Machine Learning with Python (IBM)", link: "https://drive.google.com/file/d/1y8Jj11C987XdAQ_y7eboAp5EqJ8X4flv/view?usp=drive_link" },
    { name: "Strategy Consulting Job Simulation (Accenture)", link: "https://drive.google.com/file/d/1Bu0ywwrfDO2QqPHYfQgpvWRcm9BdraWC/view?usp=drive_link" },
    { name: "Data Analytics Job Simulation (Deloitte)", link: "https://drive.google.com/file/d/1Xoj9QIom2VXPdohGJ0gxZUr0ah71RxYr/view?usp=drive_link" }
  ];

  return (
    <section id="skills" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
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
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="w-12 h-12 p-2 rounded-xl bg-white/5 dark:bg-dark-card group-hover:bg-neon-cyan/20 dark:group-hover:bg-neon-cyan/10 transition-colors flex items-center justify-center border border-transparent group-hover:border-neon-cyan/30">
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
            <div className="glass-panel rounded-2xl p-8 h-full">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/10 text-neon-cyan flex items-center justify-center border border-neon-cyan/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 font-medium hover:text-neon-cyan transition-colors leading-relaxed hover:underline inline-flex items-center gap-1.5">
                      {cert.name}
                      <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
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
