import React from 'react';
import { Building, Briefcase, User, CheckCircle } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  align?: 'left' | 'right';
  id?: string;
}

const BenefitCard = ({ title, description, benefits, icon, color, align = 'left', id }: BenefitCardProps) => {
  const containerClass = align === 'right' 
    ? 'md:flex-row-reverse text-right' 
    : 'md:flex-row text-left';
  
  return (
    <div id={id} className={`flex flex-col ${containerClass} items-center gap-8 py-16`}>
      <div className={`flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BenefitSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How Phind.me Benefits Everyone</h2>

        <div className="space-y-16">
          <BenefitCard
            id="employers"
            title="For Employers"
            description="Connect with specialized recruiters who understand your industry and hiring needs."
            benefits={[
              "Access to a network of pre-vetted, specialized recruiters",
              "Simplified process to find the right talent",
              "Transparent communication channels",
              "Reduced time-to-hire with qualified candidates",
              "Industry-specific recruitment expertise"
            ]}
            icon={<Building size={36} className="text-white" />}
            color="bg-indigo-600"
          />

          <div className="border-t border-gray-200"></div>

          <BenefitCard
            id="recruiters"
            title="For Recruiters"
            description="Expand your client base and manage your relationships more effectively."
            benefits={[
              "Centralized platform to manage employer and candidate relationships",
              "Automated tracking of candidate applications",
              "Access to new employer opportunities",
              "Tools to showcase your industry expertise and success rates",
              "Simplified communication with both employers and candidates"
            ]}
            icon={<Briefcase size={36} className="text-white" />}
            color="bg-blue-500"
            align="right"
          />

          <div className="border-t border-gray-200"></div>

          <BenefitCard
            id="job-seekers"
            title="For Job Seekers"
            description="Find recruiters who are passionate about helping you advance your career."
            benefits={[
              "Find recruiters specializing in your industry or role",
              "Track all applications submitted on your behalf",
              "Receive updates on application status",
              "Build relationships with recruiters who understand your career goals",
              "Gain insights into the hiring process and feedback"
            ]}
            icon={<User size={36} className="text-white" />}
            color="bg-amber-500"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;