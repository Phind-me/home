import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Recruitment Process?</h2>
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
          Join thousands of employers, recruiters, and candidates who have already improved their hiring experience with phind.me.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href="https://employer.phind.me" 
            className="group bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
          >
            I'm an Employer
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="https://recruiter.phind.me" 
            className="group bg-indigo-800 bg-opacity-30 hover:bg-opacity-40 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 border border-white border-opacity-30 transition-all"
          >
            I'm a Recruiter
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="https://candidate.phind.me" 
            className="group bg-indigo-800 bg-opacity-30 hover:bg-opacity-40 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 border border-white border-opacity-30 transition-all"
          >
            I'm a Candidate
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <p className="mt-8 text-white text-opacity-80">
          Have questions? <a href="#" className="underline hover:text-white">Contact our support team</a>
        </p>
      </div>
    </section>
  );
};

export default CtaSection;