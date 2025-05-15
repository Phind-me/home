import React from 'react';
import { useLocation } from 'react-router-dom';

const ComingSoon = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">{pageName}</h1>
      <p className="text-xl text-gray-600">Coming Soon</p>
    </div>
  );
};

export default ComingSoon;