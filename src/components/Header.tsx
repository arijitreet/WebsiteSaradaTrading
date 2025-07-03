import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SocialIcons from './SocialIcons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Enroll Now', id: 'next-batch' },
    { label: 'Course Details', id: 'about' },
    { label: 'Contact Us', id: 'contact' },
    { label: 'About Me', id: 'about-me' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-primary-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/SaradaTradingLogo.png" 
              alt="Sarada Trading Logo" 
              className="h-12 w-auto rounded-lg shadow-md"
            />
            <h1 className="text-xl sm:text-2xl font-bold font-poppins gradient-text">
              SARADA TRADING
            </h1>
          </motion.div>

          {/* Desktop Social Icons */}
          <div className="hidden lg:block">
            <SocialIcons />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-primary-600/20 hover:bg-primary-600/30 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block pb-4 lg:pb-0`}>
          <div className="flex flex-col lg:flex-row lg:justify-center space-y-2 lg:space-y-0 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-200 hover:text-accent-400 font-semibold py-2 px-4 rounded-lg hover:bg-primary-600/10 transition-all duration-300 text-left lg:text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </nav>
      </div>

      {/* Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-success-500 opacity-80" />
    </motion.header>
  );
};

export default Header;