import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-primary py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left - Logo & Copyright */}
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold gradient-text mb-2">Dewang Wagh</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          
          {/* Middle - Quick Links */}
          <div className="flex flex-wrap justify-center mb-4 md:mb-0">
            <a href="#home" className="mx-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#about" className="mx-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#skills" className="mx-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</a>
            <a href="#projects" className="mx-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="mx-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>
          
          {/* Right - Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 dark:text-gray-500 text-sm flex items-center justify-center">
          Made with <FaHeart className="text-red-500 mx-1" /> by Dewang Wagh
        </div>
      </div>
    </footer>
  );
};

export default Footer; 