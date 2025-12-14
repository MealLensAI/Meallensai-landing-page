import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import OrganizationsSection from '@/components/sections/OrganizationsSection';
import AboutSection from '@/components/sections/AboutSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

const WelcomePage: React.FC = () => {
  useEffect(() => {
    // Remove any transition overlay that may exist from a redirect
    try {
      const el = document.getElementById('page-transition-overlay');
      if (el) {
        el.style.opacity = '0';
        setTimeout(() => { if (el && el.parentNode) { el.parentNode.removeChild(el); } }, 200);
      }
    } catch { }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <OrganizationsSection />
        <AboutSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default WelcomePage;
