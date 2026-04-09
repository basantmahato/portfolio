import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import SEO from './components/SEO';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';
import ResumePage from './components/ResumePage';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Experience from './components/Experience';
import Skills from './components/Skills';

const HomePageContent = () => {
  return (
    <>
      <SEO />
      <Analytics />
      <Navbar />
      <ProfileCard />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <ContactFooter />
      <ScrollToTop />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;