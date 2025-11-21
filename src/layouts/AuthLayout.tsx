import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  image?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, image }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex -space-x-2 rounded-xl object-fill shadow-lg">
        <div className="w-full lg:w-1/2 flex justify-center items-center rounded-lg ">
          {image}
        </div>
        <div className="w-full lg:w-1/2 bg-white p-8 border border-yellow-100">
          {children}
        </div>
      </div>
    </div>
  );
};
