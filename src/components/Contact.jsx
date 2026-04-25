import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your message! (Simulated submission)");
  };

  return (
    <section id="contact" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 glass-panel rounded-3xl overflow-hidden">
          
          {/* Contact Info */}
          <div className="p-10 lg:p-12 text-gray-900 dark:text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Let's talk about your project!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
              Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always open to discussing new projects and creative ideas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase mb-1">Email Me</div>
                  <a href="mailto:kesavankesavanrajini@gmail.com" className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    kesavankesavanrajini@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase mb-1">Call Me</div>
                  <a href="tel:+916369866735" className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    +91 63698 66735
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase mb-1">Location</div>
                  <div className="text-lg font-semibold">
                    Tiruvannamalai, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:p-12 bg-white/5 dark:bg-dark-card border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-dark-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium resize-none"
                  placeholder="Hello Kesavan, I would like to discuss..."
                ></textarea>
              </div>
              
              <button 
                className="w-full py-4 text-white bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(138,43,226,0.6)]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
