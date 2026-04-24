import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm Kesavan's AI Assistant. ✨\nI can tell you all about his skills, projects, and experience. What would you like to know?"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  // Show tooltip after a small delay to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputText.trim()
    };

    // Hide tooltip permanently once interacted with
    setShowTooltip(false);

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      const botResponse = generateResponse(userMessage.text.toLowerCase());
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse
      }]);
    }, 1000); // slightly longer delay for "thinking" realism
  };

  const generateResponse = (input) => {
    const text = input.toLowerCase();

    // Greetings
    if (text.match(/\b(hi|hello|hey|greetings|sup)\b/)) {
      return "Hello! I'm Kesavan's AI. I can tell you about his skills, projects, education, or how to contact him. What would you like to know?";
    }
    
    // Skills / Stack
    if (text.match(/\b(skill|skills|tech|stack|language|languages|python|java|react|tools|database)\b/)) {
      return "Kesavan is a Full Stack Developer skilled in:\n• Programming: Java, Python\n• Front-End: HTML, CSS, React.js, UI/UX Design\n• Database: MySQL\n• Tools/Frameworks: Git, GitHub, Figma, Streamlit";
    }

    // specific projects enquiry
    if (text.match(/\b(cancer|skin cancer)\b/)) {
      return "Kesavan built a Skin Cancer Detection system using CNNs and MobileNetV2! It features a Streamlit UI, Grad-CAM for explainable AI, and pdf report generation.";
    }
    if (text.match(/\b(disease|retinopathy|x-ray)\b/)) {
      return "His AI Disease Detection System uses deep learning to identify diabetes, retinopathy, and analyze chest X-rays. It offers real-time predictions and was built with Python & Streamlit.";
    }
    if (text.match(/\b(mindscan|mental health|emotion)\b/)) {
      return "MindScan is a massive project! It analyzes emotions via facial expressions (CNN), vital signs (LSTM), and text sentiment (NLP) using a live camera feed.";
    }
    if (text.match(/\b(rural|transport|java project)\b/)) {
      return "His Rural Transport Management System was built in Java with an embedded HTTP server (no external dependencies!). It's containerized with Docker and deployed on Railway.";
    }

    // generic projects
    if (text.match(/\b(project|projects|portfolio|built|made|work)\b/)) {
      return "Kesavan has 4 main projects highlighted:\n1. Skin Cancer Detection (CNN/MobileNetV2)\n2. AI Disease Detection System\n3. MindScan (Mental Health Detector)\n4. Rural Transport Management (Java/Docker)\n\nAsk me about any specific one!";
    }

    // experience / internships
    if (text.match(/\b(experience|intern|internship|job|vcodez|vulture)\b/)) {
      return "Kesavan has solid internship experience:\n• ML Intern at Vcodez (July 2025): Developed models and prepared datasets.\n• Full-Stack Intern at Vulture Lines Tech (Feb-Mar 2025): Maintained full-stack web applications.";
    }

    // education / cgpa
    if (text.match(/\b(education|college|degree|university|btech|school|gpa|cgpa|marks)\b/)) {
      return "He is currently pursuing his B.Tech in IT at Arunai Engineering College (2022-2026) with an excellent GPA of 8.7. Previously, he scored 85.8% in HSC and 92.6% in SSLC.";
    }

    // certifications
    if (text.match(/\b(certifications|certificate|course|ibm|google|coursera)\b/)) {
      return "He holds numerous certifications! Some highlights include:\n• Java & Python (Coursera/Udemy/Google)\n• Prompt Engineering & ML (IBM)\n• UX Design Foundations (Google)\n• Data Analytics (Deloitte/TATA)";
    }

    // contact / reach
    if (text.match(/\b(contact|email|phone|reach|hire|number|call|message)\b/)) {
      return "You can reach Kesavan directly at kesavankesavanrajini@gmail.com, or call +91 6369866735. You can also connect with him on LinkedIn or GitHub (links are in the Hero and Footer sections!).";
    }

    // location
    if (text.match(/\b(location|where|live|city|from)\b/)) {
      return "Kesavan is based in Tiruvannamalai, India.";
    }

    // Machine Learning specifics
    if (text.match(/\b(ai|machine learning|ml|deep learning|cnn|nlp|lstm)\b/)) {
      return "Kesavan is highly passionate about AI! He frequently implements CNNs, LSTMs, and NLP architectures in his projects, utilizing frameworks like Streamlit and HuggingFace for rapid prototyping.";
    }

    // resume download
    if (text.match(/\b(download|resume|cv)\b/)) {
      return "You can download his full CV by clicking the 'Download CV' button in the Hero section at the top of the page!";
    }

    // Who are you / Bot persona
    if (text.match(/\b(who are you|what are you|bot|ai)\b/)) {
      return "I am Kesavan's personal AI Assistant. I was programmed to help you navigate his portfolio and learn all about his skills, projects, and professional background.";
    }

    // Thank you
    if (text.match(/\b(thank you|thanks|thx)\b/)) {
      return "You're very welcome! Feel free to ask if you want to know anything else about Kesavan.";
    }

    // Default fallback
    return "I'm not quite sure how to answer that! Try asking me about Kesavan's **projects**, **skills**, **internships**, **education**, or how to **contact** him.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* AI Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[90vw] max-w-sm h-[500px] max-h-[70vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col font-inter"
          >
            {/* Header */}
            <div className="bg-indigo-600 dark:bg-indigo-700 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Kesavan's AI</h3>
                  <p className="text-xs text-indigo-100 opacity-80">Ask me anything!</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 scroll-smooth">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      
                      <div className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center mt-1 text-white ${msg.type === 'user' ? 'bg-indigo-600' : 'bg-gray-400 dark:bg-gray-600'}`}>
                        {msg.type === 'user' ? <User size={12} /> : <Bot size={12} />}
                      </div>

                      <div 
                        className={`p-3 rounded-2xl text-[15px] leading-relaxed whitespace-pre-wrap shadow-sm ${
                          msg.type === 'user' 
                            ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-tr-sm' 
                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-sm'
                        }`}
                      >
                        {msg.text}
                      </div>

                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-2 max-w-[85%] flex-row">
                      <div className="w-6 h-6 shrink-0 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mt-1 text-indigo-600 dark:text-indigo-400">
                        <Bot size={12} />
                      </div>
                      <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-tl-sm shadow-sm flex items-center gap-1">
                        <motion.div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                        <motion.div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                        <motion.div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-transparent dark:border-gray-700 placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="w-10 h-10 shrink-0 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 dark:disabled:bg-indigo-800 text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Send message"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button & Tooltip container */}
      <div className="relative">
        
        {/* Welcome Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute right-16 top-1 transform -translate-y-1/2 w-48 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 font-medium"
            >
              <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white dark:bg-gray-800 border-r border-t border-gray-100 dark:border-gray-700 rotate-45"></div>
              <p>👋 Hi! I'm Kesavan's AI. Want to know more about his skills?</p>
              <button 
                onClick={() => setShowTooltip(false)}
                className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/30 border-2 border-white dark:border-gray-800 transition-all z-50 relative group"
          aria-label="Toggle AI Assistant"
        >
          {isOpen ? <X size={24} /> : (
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Bot size={26} />
            </motion.div>
          )}
          
          {/* Glowing pulse effect when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>
          )}
        </motion.button>
      </div>

    </div>
  );
};

export default AIAssistant;
