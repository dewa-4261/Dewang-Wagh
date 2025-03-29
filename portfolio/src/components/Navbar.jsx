import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActive(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'bg-white/80 dark:bg-primary/80 backdrop-blur-md' : 'bg-transparent'} 
      w-full fixed top-0 z-20 transition-all duration-300 ease-in-out`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold gradient-text">Dewang Wagh</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
              } hover:text-blue-600 dark:hover:text-blue-400 text-[16px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <a 
              href="/resume.pdf" 
              download 
              className="text-white bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            className="w-8 h-8 flex justify-center items-center text-gray-700 dark:text-gray-200"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-white dark:bg-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
                  } text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="text-white bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-lg font-medium"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 