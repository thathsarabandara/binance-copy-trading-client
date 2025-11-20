import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LK</span>
            </div>
            <span className="text-xl font-bold text-yellow-950 hidden sm:inline">LK Trader</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-yellow-900 font-semibold hover:text-yellow-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/trader/auth/login"
              className="text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
            >
              Trader Login
            </Link>
            <Link
              to="/follower/auth/login"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t-2 border-yellow-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-yellow-900 font-semibold hover:text-yellow-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="space-y-3 pt-4 border-t border-yellow-200">
              <Link
                to="/trader/auth/login"
                className="block text-center text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Trader Login
              </Link>
              <Link
                to="/follower/auth/login"
                className="block text-center bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-6 py-2 rounded-full font-bold transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
