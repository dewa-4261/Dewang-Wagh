import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 shadow-md"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <motion.div
        initial={{ rotate: theme === 'dark' ? 180 : 0 }}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="text-white"
      >
        {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 