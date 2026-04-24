import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Skin Cancer Detection",
      description: "Developed a skin cancer detection system. Implemented Grad-CAM for explainable AI, multi-page UI, and automated PDF report generation. Enhanced model deployment for seamless accessibility.",
      techStack: ["CNN", "MobileNetV2", "Streamlit", "Hugging Face"],
      liveLink: "https://skin-cancer-detection-and-prediction.streamlit.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "AI Disease Detection System",
      description: "Built AI-powered healthcare app with deep learning. Implemented models for diabetes, retinopathy, and chest X-ray detection. Delivered real-time predictions with automated preprocessing.",
      techStack: ["Deep Learning", "Streamlit", "Python"],
      liveLink: "https://diabetic-retinopathy-edds.streamlit.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "MindScan - Mental Health Detector",
      description: "Comprehensive web app for AI-powered mental health detection. Analyzes emotions through facial expressions, vital signs, text sentiment, and live camera feeds using a meta-model for multi-modal inputs.",
      techStack: ["CNN", "LSTM", "NLP", "Streamlit"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Rural Transport System",
      description: "Developed a Java-based transport management system to streamline rural booking and scheduling operations. Built with a modular architecture, embedded HTTP server, containerized with Docker, and deployed on Railway.",
      techStack: ["Java", "Docker", "Railway", "HTTP Server"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors shadow-lg" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg" aria-label="GitHub Repo">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30 rounded-full border border-indigo-100 dark:border-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
