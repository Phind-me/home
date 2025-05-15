import React from 'react';
import { Building, Users, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Our platform bridges the gap between employers, recruiters, and candidates, streamlining the hiring process for everyone.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* For Employers */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 relative">
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <Building className="text-indigo-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Employers</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-indigo-600" />
                </div>
                <p>Create a company profile and post your job requirements</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-indigo-600" />
                </div>
                <p>Browse and connect with specialized recruiters in your industry</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-indigo-600" />
                </div>
                <p>Review candidates proposed by your trusted recruiters</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-indigo-600" />
                </div>
                <p>Hire the perfect candidate for your position</p>
              </li>
            </ol>
          </div>

          {/* For Recruiters */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative lg:mt-10">
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <Briefcase className="text-blue-500 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Recruiters</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-blue-500" />
                </div>
                <p>Create your professional profile showcasing your expertise</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-blue-500" />
                </div>
                <p>Connect with employers seeking your specific industry knowledge</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-blue-500" />
                </div>
                <p>Find and match qualified candidates to open positions</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-blue-500" />
                </div>
                <p>Manage all communications through one unified platform</p>
              </li>
            </ol>
          </div>

          {/* For Candidates */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 relative lg:mt-20">
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <Users className="text-amber-500 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-4 text-amber-900">Candidates</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-amber-500" />
                </div>
                <p>Create your profile with skills, experience, and career goals</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-amber-500" />
                </div>
                <p>Connect with recruiters specializing in your field</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-amber-500" />
                </div>
                <p>Track all your applications in one place</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={18} className="text-amber-500" />
                </div>
                <p>Receive feedback and updates throughout the hiring process</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-indigo-600 rounded-full mb-6"></div>
          </div>
          <h3 className="text-2xl font-bold mb-4">The Result</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined, transparent recruitment process where employers find the right talent, 
            recruiters grow their business, and candidates advance their careers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;