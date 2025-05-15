import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import BenefitSection from './components/BenefitSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialSection from './components/TestimonialSection';
import CtaSection from './components/CtaSection';
import FooterSection from './components/FooterSection';
import ComingSoon from './pages/ComingSoon';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';

function App() {
  // Update page title
  React.useEffect(() => {
    document.title = "phind.me | Connecting Recruiters, Employers & Candidates";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <BenefitSection />
              <HowItWorksSection />
              <TestimonialSection />
              <CtaSection />
            </main>
          } />
          <Route path="/success-stories" element={<ComingSoon />} />
          <Route path="/how-it-works" element={<ComingSoon />} />
          <Route path="/blog" element={<ComingSoon />} />
          <Route path="/support" element={<ComingSoon />} />
          <Route path="/pricing" element={<ComingSoon />} />
          <Route path="/faqs" element={<ComingSoon />} />
          <Route path="/privacy-policy" element={<ComingSoon />} />
          <Route path="/terms-of-service" element={<ComingSoon />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;