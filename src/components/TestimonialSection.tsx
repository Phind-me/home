import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  type: 'employer' | 'recruiter' | 'candidate';
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Director at TechCorp",
    type: "employer",
    quote: "Phind.me has transformed our hiring process. We've found specialized recruiters who truly understand our tech needs and culture.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Tech Recruiter",
    type: "recruiter",
    quote: "This platform has allowed me to showcase my expertise in the tech industry and connect with both quality candidates and forward-thinking employers.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Alex Rivera",
    role: "Software Engineer",
    type: "candidate",
    quote: "I found a recruiter who truly advocated for me and helped me land my dream job. The transparency of seeing my applications was a game-changer.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Lisa Patel",
    role: "CEO at HealthTech Solutions",
    type: "employer",
    quote: "The quality of candidates we've received through our phind.me recruiters has been consistently high. It's saved us countless hours of screening.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Marcus Williams",
    role: "Finance Sector Recruiter",
    type: "recruiter",
    quote: "The platform makes it easy to manage relationships with multiple clients and candidates simultaneously without dropping the ball.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'employer': return 'bg-indigo-100 text-indigo-600';
      case 'recruiter': return 'bg-blue-100 text-blue-600';
      case 'candidate': return 'bg-amber-100 text-amber-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getTypeText = (type: string) => {
    switch(type) {
      case 'employer': return 'Employer';
      case 'recruiter': return 'Recruiter';
      case 'candidate': return 'Candidate';
      default: return '';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Users Say</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Hear from the employers, recruiters, and candidates who have transformed their hiring process with phind.me.
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getTypeColor(testimonial.type)}`}>
                        {getTypeText(testimonial.type)}
                      </div>
                      <p className="text-lg md:text-xl italic mb-6">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-indigo-600 w-6' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;