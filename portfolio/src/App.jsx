import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    return savedTheme;
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="relative bg-white dark:bg-primary min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main Content */}
        <main>
          <Home />
          <About />
        </main>

        {/* Footer */}
        <footer className="py-5 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="container mx-auto px-4">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Dewang Wagh. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
