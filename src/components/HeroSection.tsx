import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaButtonProps {
  text: string;
  color: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CtaButton = ({ text, color, icon = <ArrowRight size={18} />, onClick }: CtaButtonProps) => {
  return (
    <button
      className={`${color} px-6 py-3 rounded-lg text-white font-medium 
                 flex items-center justify-center gap-2 transition-all
                 hover:shadow-lg hover:scale-105 active:scale-95`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

const HeroSection = () => {
  const handleEmployerClick = () => {
    window.open('https://phindmeemployer.cairns.co.za/', '_blank', 'noopener,noreferrer');
  };

  const handleRecruiterClick = () => {
    window.open('https://phindmerecruiter.cairns.co.za/', '_blank', 'noopener,noreferrer');
  };

  const handleCandidateClick = () => {
    window.open('https://phindmeajob.cairns.co.za/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-indigo-600 to-blue-500 inline-block">
          Connecting the Right Talent with the Right Opportunities
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Phind.me streamlines the recruitment process by connecting employers, recruiters, and candidates in a single unified platform.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-indigo-600">For Employers</h3>
            <p className="text-gray-600 mb-6">Connect with specialized recruiters to find the perfect candidates for your positions.</p>
            <CtaButton 
              text="I'm an Employer" 
              color="bg-indigo-600 hover:bg-indigo-700" 
              onClick={handleEmployerClick}
            />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-blue-500">For Recruiters</h3>
            <p className="text-gray-600 mb-6">Expand your network and manage your employer and candidate relationships efficiently.</p>
            <CtaButton 
              text="I'm a Recruiter" 
              color="bg-blue-500 hover:bg-blue-600" 
              onClick={handleRecruiterClick}
            />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-amber-500">For Job Seekers</h3>
            <p className="text-gray-600 mb-6">Find recruiters who will champion your career and track all your applications.</p>
            <CtaButton 
              text="I'm a Job Seeker" 
              color="bg-amber-500 hover:bg-amber-600" 
              onClick={handleCandidateClick}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <ArrowRight size={24} className="rotate-90 text-indigo-600" />
      </div>
    </div>
  );
};

export default HeroSection;