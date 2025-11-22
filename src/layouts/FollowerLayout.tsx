import React, { ReactNode, useState } from 'react';
import FollowerSidebar from '../components/FollowerSidebar';
import MiniFooter from '../components/MiniFooter';

interface FollowerLayoutProps {
  children: ReactNode;
}

const FollowerLayout: React.FC<FollowerLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <FollowerSidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <main className="min-h-[calc(100vh-60px)] p-6">
          {children}
        </main>
        <MiniFooter />
      </div>
    </div>
  );
};

export default FollowerLayout;
