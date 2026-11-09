import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import AboutSection from './components/AboutSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ServicesSection from './components/ServicesSection';
import CreativeEdgeSection from './components/CreativeEdgeSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-brand-lime selection:text-ink">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandMarquee />
        <AboutSection />
        <CaseStudiesSection />
        <ServicesSection />
        <CreativeEdgeSection />
        <ExperienceTimeline />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

