import React from 'react';
import { Moon, Sun, Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Border Line */}
        <div className="border-t border-gray-200 dark:border-gray-800"></div>
        
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <img
                src="https://i.imgur.com/jWr67J8.png"
                alt="Designscape Studio"
                className="h-8"
                style={{
                  filter: isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%) contrast(1)',
                  opacity: 0.9
                }}
              />
              <p className="text-gray-600 dark:text-gray-400">
                Creating exceptional architectural experiences that inspire and endure.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="mailto:info@designscape.studio" className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>info@designscape.studio</span>
                </a>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>123 Design Street, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  <LinkedIn className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Preferences</h4>
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-4 w-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Designscape Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;