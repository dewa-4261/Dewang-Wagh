import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Side - Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-gray-600 dark:text-gray-400 text-xl md:text-2xl mb-2 font-medium">
              Hello, I'm
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Dewang Anil Wagh
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 max-w-xl"
            >
              Computer Engineering Student, Tech Enthusiast, and AI/ML Developer
            </motion.p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <a 
                  href="/resume.pdf" 
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <FaDownload /> Download Resume
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <a 
                  href="#contact"
                  className="flex items-center gap-2 border-2 border-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex gap-4"
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 floating">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-xl opacity-20"></div>
              <div className="overflow-hidden w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Replace with actual image once available */}
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="text-xl">Profile Image</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center pt-1"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gray-500 dark:bg-gray-400 rounded-full"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 