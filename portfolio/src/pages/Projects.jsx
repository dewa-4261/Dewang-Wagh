import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tags, sourceCode, liveDemo, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-tertiary rounded-2xl shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        {/* Replace with actual project image */}
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
          <span className="text-xl">{title} Preview</span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between p-4"
        >
          <div>
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>
          <div className="flex space-x-2">
            {sourceCode && (
              <a 
                href={sourceCode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
            )}
            {liveDemo && (
              <a 
                href={liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {sourceCode && (
            <a 
              href={sourceCode} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub size={16} /> Source Code
            </a>
          )}
          {liveDemo && (
            <a 
              href={liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaExternalLinkAlt size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Docuflex",
      description: "A web-based document/image processing tool using Flask, offering various transformation and analysis features.",
      image: "/images/projects/docuflex.jpg",
      tags: ["Flask", "Python", "OpenCV", "Web App"],
      sourceCode: "https://github.com/yourusername/docuflex",
      liveDemo: "https://docuflex.example.com"
    },
    {
      title: "MoneyMate",
      description: "AI-powered expense tracker that helps users manage their finances through intelligent categorization and analysis.",
      image: "/images/projects/moneymate.jpg",
      tags: ["AI/ML", "Python", "React", "Financial Tech"],
      sourceCode: "https://github.com/yourusername/moneymate",
      liveDemo: "https://moneymate.example.com"
    },
    {
      title: "YouTube Video Summarizer",
      description: "A tool that summarizes and creates interactive notes from YouTube video content, saving time for users.",
      image: "/images/projects/youtube-summarizer.jpg",
      tags: ["NLP", "Python", "API Integration", "Summarization"],
      sourceCode: "https://github.com/yourusername/youtube-summarizer",
      liveDemo: "https://youtube-summarizer.example.com"
    },
    {
      title: "Quiz Web App",
      description: "A platform that enables students and teachers to create, take, and analyze tests and quizzes online.",
      image: "/images/projects/quiz-app.jpg",
      tags: ["Web Development", "Education", "JavaScript", "Database"],
      sourceCode: "https://github.com/yourusername/quiz-app",
      liveDemo: "https://quiz-app.example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            <FaCode size={18} /> View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 