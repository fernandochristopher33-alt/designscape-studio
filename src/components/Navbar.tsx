import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isHomePage = location.pathname === '/';

  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white';
    }
    return 'text-gray-800 dark:text-gray-200';
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://i.imgur.com/jWr67J8.png"
              alt="Designscape Studio"
              className="h-8"
              style={{
                filter: (isScrolled || !isHomePage)
                  ? 'brightness(0) saturate(100%) contrast(1)' 
                  : 'brightness(0) invert(1)',
                opacity: 0.9
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  location.pathname === path
                    ? 'text-accent'
                    : getTextColor()
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${getTextColor()}`} />
            ) : (
              <Menu className={`h-6 w-6 ${getTextColor()}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === path
                      ? 'text-accent bg-gray-100 dark:bg-gray-800'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;