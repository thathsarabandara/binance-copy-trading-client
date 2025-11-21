import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MiniFooter from './MiniFooter';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        {/* Top Header Bar (optional) */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 sticky top-0 z-30">
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-900">Master Trader Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* You can add profile, notifications, etc here */}
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">MT</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

        {/* Mini Footer */}
        <MiniFooter />
      </div>
    </div>
  );
};

export default DashboardLayout;
