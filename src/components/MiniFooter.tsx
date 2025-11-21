import React from 'react';
import { Link } from 'react-router-dom';

const MiniFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <div className="text-xs text-gray-600">
            © {currentYear} LK Trader. All rights reserved.
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/trader/help"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
            >
              Help
            </Link>
            <span className="text-gray-300">•</span>
            <a
              href="#privacy"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
            >
              Privacy
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#terms"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
            >
              Terms
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:support@lktrader.com"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
