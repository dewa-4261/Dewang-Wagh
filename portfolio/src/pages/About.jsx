import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaCar, FaBuilding } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              {/* Replace with actual image once available */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                <span className="text-xl">About Me Image</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-blue-500 rounded-xl -z-10"></div>
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Get to know me better
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate second-year Computer Engineering student at K.C. College of Engineering with a 
              strong interest in artificial intelligence, machine learning, and automation. As the Technical 
              Co-Head of CIIC, I lead various technical initiatives and projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">Computer Engineering at K.C. College of Engineering</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaLaptopCode size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Technical Lead</h4>
                  <p className="text-gray-600 dark:text-gray-400">Technical Co-Head of CIIC</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                  <FaCar size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Interests</h4>
                  <p className="text-gray-600 dark:text-gray-400">Enthusiastic about cars and automotive technology</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <FaBuilding size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Family Business</h4>
                  <p className="text-gray-600 dark:text-gray-400">Experience in construction, grocery, and farming</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300">
              Beyond academics, I'm also passionate about applying technology to solve real-world problems. 
              I enjoy working on projects that combine my technical knowledge with practical applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 