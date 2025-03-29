import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <h2 className="text-gray-600 dark:text-gray-400 text-xl md:text-2xl mb-2 font-medium">
              Hello, I'm
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Dewang Anil Wagh
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 max-w-xl">
              Computer Engineering Student, Tech Enthusiast, and AI/ML Developer
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div>
                <a 
                  href="/resume.pdf" 
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
              <div>
                <a 
                  href="#contact"
                  className="flex items-center gap-2 border-2 border-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-xl opacity-20"></div>
              <div className="overflow-hidden w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Replace with actual image once available */}
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="text-xl">Profile Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 