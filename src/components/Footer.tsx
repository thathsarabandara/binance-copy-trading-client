import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Copy Trading', href: '#' },
        { label: 'Analytics', href: '#' },
        { label: 'Portfolio', href: '#' },
        { label: 'Pricing', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Disclaimer', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-yellow-950 to-yellow-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-yellow-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-3">Stay Updated</h3>
              <p className="text-yellow-200 font-semibold">Get the latest trading tips and market insights delivered to your inbox.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white text-yellow-950 font-semibold placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 text-yellow-950 px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-lg flex items-center justify-center">
                <span className="text-yellow-950 font-bold text-xl">LK</span>
              </div>
              <span className="text-2xl font-bold">LK Trader</span>
            </Link>
            <p className="text-yellow-200 font-semibold mb-6">
              Empowering traders worldwide with copy trading and advanced analytics.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-yellow-200 font-semibold">
                <Mail size={18} />
                <a href="mailto:support@lktrader.com" className="hover:text-yellow-100 transition-colors">
                  support@lktrader.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-yellow-200 font-semibold">
                <Phone size={18} />
                <a href="tel:+94112345678" className="hover:text-yellow-100 transition-colors">
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center gap-3 text-yellow-200 font-semibold">
                <MapPin size={18} />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold mb-6 text-yellow-100">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-yellow-200 font-semibold hover:text-yellow-100 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <div className="text-yellow-200 font-semibold">
              <p>&copy; {currentYear} LK Trader. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-start md:justify-end gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-yellow-800 hover:bg-yellow-700 rounded-full flex items-center justify-center transition-all hover:shadow-lg"
                  >
                    <Icon size={20} className="text-yellow-100" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
