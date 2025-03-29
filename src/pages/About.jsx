import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              {/* Replace with actual image once available */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                <span className="text-xl">About Me Image</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-blue-500 rounded-xl -z-10"></div>
          </div>
          
          {/* Right Side - Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Get to know me better
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate second-year Computer Engineering student at K.C. College of Engineering with a 
              strong interest in artificial intelligence, machine learning, and automation. As the Technical 
              Co-Head of CIIC, I lead various technical initiatives and projects.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              Beyond academics, I'm also passionate about applying technology to solve real-world problems. 
              I enjoy working on projects that combine my technical knowledge with practical applications.
              I'm also enthusiastic about cars and have experience in my family's construction, grocery, and farming business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 