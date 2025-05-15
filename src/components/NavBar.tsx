import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleMobileNavigation = (to: string) => {
    setMobileMenuOpen(false);
    navigate(to);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-indigo-600">
                phind.me
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/how-it-works"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              How It Works
            </Link>
            <button 
              onClick={() => scrollToSection('employers')}
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              For Employers
            </button>
            <button 
              onClick={() => scrollToSection('recruiters')}
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              For Recruiters
            </button>
            <button 
              onClick={() => scrollToSection('job-seekers')}
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              Job Seekers
            </button>
            <Link 
              to="/pricing"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              Pricing
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md focus:outline-none text-gray-700"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <button 
            onClick={() => handleMobileNavigation('/how-it-works')} 
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('employers')} 
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          >
            For Employers
          </button>
          <button 
            onClick={() => scrollToSection('recruiters')} 
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          >
            For Recruiters
          </button>
          <button 
            onClick={() => scrollToSection('job-seekers')} 
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          >
            Job Seekers
          </button>
          <button 
            onClick={() => handleMobileNavigation('/pricing')} 
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          >
            Pricing
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;