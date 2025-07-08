import React from 'react';
import './components/App.css'; // Import CSS directly
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import FQAsection from './components/FQAsection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <FQAsection/>
      <Footer />
    </div>
  );
};

export default App;