// App.jsx (FIXED)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';
import ResumePage from './components/ResumePage';

// Component to hold all the single-page content
const HomePageContent = () => (
    <>
     <Navbar />
        <ProfileCard />
        <AboutMe />
        <Projects />
        <ContactFooter />
    </>
);

function App() {
  return (
    <Router>
        {/* Navbar is rendered outside Routes so it's always visible */}
       
        
        <Routes>
            {/* 1. Main Content Route: Renders everything on the homepage (path="/") */}
            <Route path="/" element={<HomePageContent />} />
            
            {/* 2. Resume Page Route: Renders ONLY the ResumePage at /resume */}
            <Route path="/resume" element={<ResumePage />} />
        </Routes>
    </Router>
  );
}

export default App;